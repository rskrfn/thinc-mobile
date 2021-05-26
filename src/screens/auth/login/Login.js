import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import styles from './Style';
import {connect} from 'react-redux';
import {loginAction} from '../../../redux/Action/auth';
import * as Animatable from 'react-native-animatable';
// import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Toast} from 'native-base';
import {API_URL} from '@env';

// import CustomIcon from '../../components/customicon/icomoon';

function Login(props) {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const [eye, setEye] = useState({
    secureText: true,
  });
  const updateSecureText = () => {
    setEye({
      ...eye,
      secureText: !eye.secureText,
    });
  };
  let submitHandler = e => {
    const auth = {
      username: data.username,
      password: data.password,
    };
    if (!auth.username || !auth.password) {
      return Toast.show({
        text: 'Fill in your data',
        type: 'warning',
        textStyle: {textAlign: 'center'},
      });
    } else {
      // console.log(props);
      props.onLoginHandler(auth);
    }
  };
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
    } else {
      if (
        props.loginReducer.err?.data?.message === 'Incorrect Email or Password'
      ) {
        return Toast.show({
          text: 'Incorrect Email or Password',
          type: 'danger',
          textStyle: {textAlign: 'center'},
        });
      }
      if (props.loginReducer.err?.data?.message === 'Network Error') {
        return Toast.show({
          text: 'Network Error',
          type: 'danger',
          textStyle: {textAlign: 'center'},
        });
      }
    }
  }, [props.loginReducer.err?.data?.message]);

  return (
    <SafeAreaView fadeIn style={styles.container}>
      <ScrollView contentContainerstyle={styles.container}>
        <Animatable.View animation="fadeIn">
          <Text style={styles.header}>Login</Text>
          <View style={styles.inputGroup}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email or Username</Text>
              <TextInput
                style={styles.textInputUsername}
                autoCapitalize="none"
                onChangeText={username => {
                  setData({
                    ...data,
                    username: username,
                  });
                }}
              />
            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.textInputPassword}
                autoCapitalize="none"
                secureTextEntry={eye.secureText ? true : false}
                onChangeText={password => {
                  setData({
                    ...data,
                    password: password,
                  });
                }}
              />
              <TouchableOpacity style={styles.eye} onPress={updateSecureText}>
                {eye.secureText ? (
                  <MaterialIcons name="visibility" color="black" size={24} />
                ) : (
                  <MaterialIcons
                    name="visibility-off"
                    color="black"
                    size={24}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <TouchableOpacity
                style={styles.forgot}
                onPress={() => {
                  props.navigation.navigate('SendEmail');
                }}>
                <Text style={styles.forgottext}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <TouchableOpacity style={styles.btnlogin} onPress={submitHandler}>
                <Text style={styles.btntextlogin}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <TouchableOpacity
                style={styles.btngoogle}
                onPress={() => {
                  console.log(API_URL);
                }}>
                <Image
                  style={styles.googleicon}
                  source={require('../../../assets/icons/icon_google.png')}
                />
                <Text style={styles.btntextgoogle}>Login with Google</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.register}>
              <Text style={styles.newusertext}>New user?</Text>
              <Text
                style={styles.registertext}
                onPress={() => props.navigation.navigate('Register')}>
                Register
              </Text>
            </View>
          </View>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
}
const mapStatetoProps = state => {
  return {
    loginReducer: state.loginReducers,
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onLoginHandler: data => {
      dispatch(loginAction(data));
    },
  };
};

const connectedLogin = connect(mapStatetoProps, mapDispatchtoProps)(Login);
export default connectedLogin;
