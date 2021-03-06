/* eslint-disable react-hooks/exhaustive-deps */
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import {useSocket} from './src/context/SocketProvider';
import NotifService from './NotifService';
import RNBootSplash from 'react-native-bootsplash';
import Login from './src/screens/auth/login/Login';
import Register from './src/screens/auth/register/Register';
import SendEmail from './src/screens/auth/reset/sendemail/SendEmail';
import Verification from './src/screens/auth/reset/verification/Verification';
import NewPassword from './src/screens/auth/reset/newpassword/NewPassword';
import Dashboard from './src/screens/dashboard/Dashboard';
import Activity from './src/screens/activity/Activity';
import MyClass from './src/screens/activity/myclass/MyClass';
import MyClassFacilitator from './src/components/activity/facilitator/facilitatorclass/MyClassFacilitator';
import ClassDetail from './src/components/activity/member/classdetail/ClassDetail';
import ClassDetailFacilitator from './src/components/activity/facilitator/classdetail/ClassDetailFacilitator';
import ScoreDetail from './src/components/activity/classdetail/score/ScoreDetail';
import Chat from './src/screens/chat/Chat';
import ChatRoom from './src/components/chat/ChatRoom';
import Profile from './src/screens/profile/Profile';
import Phone from './src/components/profile/phone/Phone';
import ChangePassword from './src/components/profile/password/ChangePassword';
import CustomIcon from './src/components/customicon/icomoon';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ActivityNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ActivityMain" component={Activity} />
      <Stack.Screen name="MyClass" component={MyClass} />
      <Stack.Screen name="MyClassFacilitator" component={MyClassFacilitator} />
      <Stack.Screen name="ClassDetail" component={ClassDetail} />
      <Stack.Screen
        name="ClassDetailFacilitator"
        component={ClassDetailFacilitator}
      />
      <Stack.Screen name="ScoreDetail" component={ScoreDetail} />
    </Stack.Navigator>
  );
}

function ProfileNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileMain" component={Profile} />
      <Stack.Screen name="Phone" component={Phone} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}

function ChatNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ChatMain" component={Chat} />
      <Stack.Screen name="ChatRoom" component={ChatRoom} />
    </Stack.Navigator>
  );
}

function AuthNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;
          let iconColor;
          let active;

          if (route.name === 'Dashboard') {
            icon = 'home';
            iconColor = focused ? '#5784BA' : '#ADA9BB';
            active = focused ? <View style={classes.indicator} /> : null;
          }
          if (route.name === 'Activity') {
            icon = 'book';
            iconColor = focused ? '#5784BA' : '#ADA9BB';
            active = focused ? <View style={classes.indicator} /> : null;
          }
          if (route.name === 'Chat') {
            icon = 'chat';
            iconColor = focused ? '#5784BA' : '#ADA9BB';
            active = focused ? <View style={classes.indicator} /> : null;
          }
          if (route.name === 'Profile') {
            icon = 'user';
            iconColor = focused ? '#5784BA' : '#ADA9BB';
            active = focused ? <View style={classes.indicator} /> : null;
          }
          return (
            <>
              {active}
              <CustomIcon name={icon} size={24} color={iconColor} />
            </>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Activity" component={ActivityNavigation} />
      <Tab.Screen name="Chat" component={ChatNavigation} />
      <Tab.Screen name="Profile" component={ProfileNavigation} />
    </Tab.Navigator>
  );
}

function Router(props) {
  let userData = props.loginReducers.user?.data;
  const onNotif = notif => {
    Alert.alert(notif.title, notif.message);
  };

  const notif = new NotifService(onNotif);
  let socket = useSocket();
  React.useEffect(() => {
    socket;
    // console.log(socket.id);
    socket.emit('adduser', userData?.id, socket.id, socket.connected);
  }, [socket]);
  React.useEffect(() => {
    socket.on('course-notif', (courseName, sender) => {
      // console.log('index rn', courseName, sender);
      notif.localNotif('', `${sender.name} Registered on ${courseName}`);
    });
  }, [socket]);
  React.useEffect(() => {
    if (props.loginReducers.isLogin === true) {
      notif.localNotif('', `Welcome back, ${userData.name.split(' ')[0]}`);
    }
  }, [props.loginReducers.isLogin]);

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator headerMode={'none'}>
        {!props.loginReducers.isLogin ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="SendEmail" component={SendEmail} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
          </>
        ) : (
          <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const classes = StyleSheet.create({
  indicator: {
    position: 'absolute',
    top: 0,
    width: '50%',
    borderBottomWidth: 2.5,
    borderRadius: 100,
    borderBottomColor: '#5784BA',
  },
});
const mapStatetoProps = state => {
  return {
    loginReducers: state.loginReducers,
  };
};
const connectedRouter = connect(mapStatetoProps)(Router);
export default connectedRouter;
