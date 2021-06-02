import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const classes = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
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
    marginBottom: 17,
    paddingHorizontal: 5,
  },
  headmyclass: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginTop: 16,
    width: '48%',
  },
  headprogress: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginTop: 16,
    width: '22%',
  },
  headscore: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginTop: 16,
    width: '25%',
  },
  myclass: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    margin: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },

  tableclassname: {
    width: '55%',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
  },
  tableprogress: {
    width: '25%',
  },
  textprogress: {
    color: '#5784BA',
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
  },
  tablescore: {
    width: '20%',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
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
  newClassSection: {
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 10,
    paddingVertical: 28,
  },
  newclassheader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    paddingLeft: 8,
  },
  searchSection: {
    flexDirection: 'row',
  },
  searchInputContainer: {
    marginTop: 12,
    marginBottom: 2,
    borderColor: 'black',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopLeftRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    height: 45,
    width: '75%',
  },
  searchInput: {
    fontFamily: 'Montserrat-Medium',
    color: '#ADA9A9',
    fontSize: 14,
  },
  btnSearch: {
    width: '25%',
    borderTopRightRadius: 10,
    height: 45,
    justifyContent: 'center',
    marginTop: 12,
    backgroundColor: '#5784BA',
  },
  filterSection: {
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    height: 40,
    marginBottom: 12,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  pickeritem: {fontFamily: 'Roboto-Regular', fontSize: 15},
  filterbtn: {
    width: 70,
    backgroundColor: '#5784BA',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
  },
  filterbtntext: {
    color: 'white',
    textAlign: 'center',
  },
  newClassItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    margin: 2,
    borderRadius: 10,
    padding: 10,
    height: 65,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },
  headname: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginTop: 16,
    width: '39%',
  },
  headlevel: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginTop: 16,
    width: '21%',
  },
  headprice: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginTop: 16,
    width: '18%',
  },

  newClassName: {
    width: '39%',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
  },
  newlevel: {
    textAlign: 'center',
    width: '21%',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
  },
  newprice: {
    textAlign: 'center',
    width: '18%',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
  },
  newbtnregister: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '22%',
    backgroundColor: '#57BA61',
    borderRadius: 16,
    height: 32,
  },
  txtRegister: {
    textAlign: 'center',
    paddingHorizontal: 5,
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: 'white',
  },
  loadMore: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  load: {
    alignSelf: 'center',
    marginTop: 16,
    color: '#ADA9A9',
  },
  loadarrow: {
    alignSelf: 'center',
    marginTop: -6,
  },
  servererror: {
    padding: 8,
  },
  texterror: {
    textAlign: 'center',
    fontFamily: 'Kanit-Regular',
    color: 'red',
    borderRadius: 20,
  },
});
export default classes;
