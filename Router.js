import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import CustomIcon from './src/components/customicon/icomoon';
import Login from './src/screens/auth/login/Login';
import Register from './src/screens/auth/register/Register';
import Dashboard from './src/screens/dashboard/Dashboard';
import Activity from './src/screens/activity/Activity';
import Chat from './src/screens/chat/Chat';
import Profile from './src/screens/profile/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
            active = focused ? <View style={classes.active} /> : null;
          }
          if (route.name === 'Activity') {
            icon = 'book';
            iconColor = focused ? '#5784BA' : '#ADA9BB';
            active = focused ? <View style={classes.active} /> : null;
          }
          if (route.name === 'Chat') {
            icon = 'chat';
            iconColor = focused ? '#5784BA' : '#ADA9BB';
            active = focused ? <View style={classes.active} /> : null;
          }
          if (route.name === 'Profile') {
            icon = 'user';
            iconColor = focused ? '#5784BA' : '#ADA9BB';
            active = focused ? <View style={classes.active} /> : null;
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
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function Router(props) {
  React.useEffect(() => {
    // console.log(props);
  }, [props]);

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator headerMode={'none'}>
        {!props.loginReducers.isLogin ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const classes = StyleSheet.create({
  active: {
    position: 'absolute',
    top: 0,
    width: '50%',
    borderBottomWidth: 4,
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
