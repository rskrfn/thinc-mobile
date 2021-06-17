import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const classes = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  textpage: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  headmyclass: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginTop: 16,
    width: '55%',
  },
  headstudent: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginTop: 16,
    width: '30%',
  },
  myclasscontainer: {
    marginHorizontal: '2%',
  },
  myclass: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginVertical: 1,
    paddingVertical: '6%',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },
  tableclassname: {
    width: '55%',
    alignSelf: 'flex-start',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
  },
  tablestudent: {
    width: '30%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  studenttext: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
  },
  studenticon: {
    marginLeft: 5,
    width: 20,
    height: 20,
  },
  arrowicon: {
    flex: 1,
    position: 'absolute',
    right: 10,
  },
  allmyclass: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13,
  },
  textallmyclass: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  createnewclass: {
    marginVertical: 10,
    marginHorizontal: '2%',
    paddingVertical: '6%',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },
  newclassheader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    marginBottom: 10,
  },
  inputgroup: {
    width: '100%',
    marginVertical: '2%',
    paddingRight: '3%',
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputdesc: {
    width: '29%',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  inputbox: {
    height: 40,
    width: '70%',
    margin: 0,
    padding: 0,
    marginLeft: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
  },
  categorypicker: {
    width: '70%',
    height: 40,
    margin: 0,
    padding: 0,
    marginLeft: 5,
    overflow: 'hidden',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  pickeritem: {
    margin: 0,
    padding: 0,
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
  },
  inputboxarea: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    textAlignVertical: 'top',
    marginTop: 10,
    width: '100%',
    height: 100,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    borderRadius: 10,
    backgroundColor: 'rgba(235, 235, 235, 1)',
  },
  createbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    width: '100%',
    height: 50,
    borderRadius: 20,
    backgroundColor: 'rgba(87, 186, 97, 1)',
  },
  createbtntext: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: 'white',
  },
});
export default classes;
