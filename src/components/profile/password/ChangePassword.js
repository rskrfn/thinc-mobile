/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Toast} from 'native-base';
import axios from 'axios';
import {API_URL} from '@env';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import classes from './Style';
import {connect} from 'react-redux';

const ChangePassword = props => {
  const TOKEN = props.loginReducers.user?.token;
  const userId = props.loginReducers.user?.data.id;
  const [password, setPassword] = useState();
  const [repeat, setRepeat] = useState();
  const [eye, setEye] = useState({
    securePass: true,
    secureRepeat: true,
  });
  const FormData = require('form-data');
  const data = new FormData();
  data.append('id', userId);
  data.append('password', password);

  const submitHandler = e => {
    const config = {
      method: 'patch',
      url: `${API_URL}/profile/`,
      headers: {
        token: TOKEN,
      },
      data: data,
    };

    if (!password || !repeat) {
      return Toast.show({
        text: 'Enter your new password!',
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    if (password.length < 8) {
      return Toast.show({
        text: 'Password must be at least 8 characters',
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    if (password !== repeat) {
      return Toast.show({
        text: "Password didn't match",
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    axios(config)
      .then(res => {
        console.log(res);
        if (res.data.message === 'Data Changed') {
          Toast.show({
            text: 'Password has been changed',
            type: 'success',
            textStyle: {textAlign: 'center'},
            duration: 3000,
          });
          return setTimeout(() => {
            props.navigation.goBack();
          }, 5000);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  function passwordWarning() {
    if (password.length < 8) {
      return (
        <View style={classes.warning}>
          <Text style={{...classes.inputwarning, color: '#010620'}}>
            Must be at least 8 characters
          </Text>
        </View>
      );
    }
    if (password.length > 16) {
      return (
        <View style={classes.warning}>
          <Text style={{...classes.inputwarning, color: '#FF1313'}}>
            Can not exceed 16 characters
          </Text>
          <MaterialIcons
            style={classes.warninglogo}
            name="cancel"
            size={16}
            color="#FF1313"
          />
        </View>
      );
    }
  }
  function repeatWarning() {
    if (repeat.length < 8) {
      return (
        <View style={classes.warning}>
          <Text style={{...classes.inputwarning, color: '#010620'}}>
            Must be at least 8 characters
          </Text>
        </View>
      );
    }
    if (repeat.length > 16) {
      return (
        <View style={classes.warning}>
          <Text style={{...classes.inputwarning, color: '#FF1313'}}>
            Can not exceed 16 characters
          </Text>
          <MaterialIcons
            style={classes.warninglogo}
            name="cancel"
            size={16}
            color="#FF1313"
          />
        </View>
      );
    }
    if (repeat !== password) {
      return (
        <View style={classes.warning}>
          <Text style={{...classes.inputwarning, color: '#FF1313'}}>
            Password didn't match
          </Text>
          <MaterialIcons
            style={classes.warninglogo}
            name="cancel"
            size={16}
            color="#FF1313"
          />
        </View>
      );
    }
    if (repeat === password) {
      return (
        <View style={classes.warning}>
          <Text style={{...classes.inputwarning, color: '#0EAA00'}}>
            Password match
          </Text>
          <MaterialIcons
            style={classes.warninglogo}
            name="check-circle"
            size={16}
            color="#0EAA00"
          />
        </View>
      );
    }
  }

  useEffect(() => {}, []);
  return (
    <ScrollView style={classes.maincontainer}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={classes.buttonbar}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <MaterialIcons name="chevron-left" size={42} color={'#ADA9BB'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={submitHandler}>
          <MaterialIcons name="save" size={32} color={'#5784BA'} />
        </TouchableOpacity>
      </View>
      <View style={classes.content}>
        <Text style={classes.header}>Change Password</Text>
        <Text style={classes.desc1}>
          Your new password must be different from previous used password!
        </Text>
        <View style={classes.input}>
          <Text style={classes.inputlabel}>Password</Text>
          <TextInput
            style={classes.textInputPassword}
            autoCapitalize="none"
            secureTextEntry={eye.securePass ? true : false}
            value={password}
            onChangeText={value => {
              setPassword(value);
            }}
          />
          <TouchableOpacity
            style={classes.eye}
            onPress={() => {
              setEye({
                ...eye,
                securePass: !eye.securePass,
              });
            }}>
            {eye.securePass ? (
              <MaterialIcons name="visibility" color="black" size={24} />
            ) : (
              <MaterialIcons name="visibility-off" color="black" size={24} />
            )}
          </TouchableOpacity>
        </View>
        {password ? passwordWarning() : null}
        <View style={classes.input2}>
          <Text style={classes.inputlabel}>Repeat Password</Text>
          <TextInput
            style={classes.textInputrepeatPassword}
            autoCapitalize="none"
            secureTextEntry={eye.secureRepeat ? true : false}
            value={repeat}
            onChangeText={value => {
              setRepeat(value);
            }}
          />
          <TouchableOpacity
            style={classes.eye}
            onPress={() => {
              setEye({
                ...eye,
                secureRepeat: !eye.secureRepeat,
              });
            }}>
            {eye.secureRepeat ? (
              <MaterialIcons name="visibility" color="black" size={24} />
            ) : (
              <MaterialIcons name="visibility-off" color="black" size={24} />
            )}
          </TouchableOpacity>
        </View>
        {repeat ? repeatWarning() : null}
        <View style={classes.input}>
          <TouchableOpacity
            style={classes.btnsend}
            onPress={() => {
              submitHandler();
            }}>
            <Text style={classes.btntextsend}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const mapStateToProps = state => ({
  loginReducers: state.loginReducers,
});
const connectedChangePassword = connect(mapStateToProps)(ChangePassword);

export default connectedChangePassword;
