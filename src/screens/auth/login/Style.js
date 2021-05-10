import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
  },

  header: {
    alignSelf: 'center',
    fontFamily: 'Kanit-SemiBold',
    fontSize: 32,
    color: 'black',
    marginBottom: '10%',
    marginTop: 100,
  },
  inputGroup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '10%',
    marginRight: '10%',
  },
  inputLabel: {
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    color: '#ADA9BB',
    fontFamily: 'Kanit-Regular',
    left: 8,
    top: -10,
    paddingLeft: 2,
    paddingRight: 2,
    zIndex: 10,
  },
  textInputUsername: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ADA9BB',
    borderRadius: 10,
    padding: 10,
    marginBottom: '10%',
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: 'black',
  },
  textInputPassword: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ADA9BB',
    borderRadius: 10,
    padding: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: 'black',
  },
  eye: {
    position: 'absolute',
    right: 15,
    justifyContent: 'center',
  },
  forgot: {
    flex: 1,
    alignItems: 'flex-end',
  },
  forgottext: {
    marginTop: 10,
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  btnlogin: {
    width: '100%',
    alignItems: 'center',
    marginTop: '10%',
    backgroundColor: '#5784BA',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    padding: 10,
  },
  btntextlogin: {
    fontSize: 18,
    width: '100%',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Kanit-Medium',
  },
  btngoogle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(0, 13, 79, 0.08)',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    padding: 10,
  },
  googleicon: {
    alignSelf: 'center',
    width: 20,
    height: 20,
  },
  btntextgoogle: {
    flex: 0.6,
    fontSize: 16,
    width: '100%',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Kanit-Medium',
  },
  icongoogle: {
    position: 'absolute',
    left: '20%',
    color: '#5784BA',
  },
  register: {
    flexDirection: 'row',
    marginTop: 150,
  },
  newusertext: {
    color: '#ADA9BB',
    fontFamily: 'Kanit-Medium',
    fontSize: 15,
  },
  registertext: {
    fontFamily: 'Kanit-Medium',
    marginLeft: 8,
    color: '#5784BA',
    fontSize: 15,
  },
});

export default styles;
