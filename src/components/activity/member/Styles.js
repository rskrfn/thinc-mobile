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
    width: '46%',
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
    width: '28%',
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
    width: '46%',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
  },
  tableprogress: {
    width: '25%',
    alignItems: 'center',
  },
  textprogress: {
    color: '#5784BA',
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
  },
  tablescore: {
    width: '26%',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  unfinishedcontainer: {
    width: '23%',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: '1%',
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#EDD2D2',
    borderRadius: 20,
  },
  unfinishtext: {
    fontFamily: 'Montserrat-Medium',
    color: '#BA5757',
    fontSize: 10,
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
    margin: 0,
    marginTop: 12,
    marginBottom: 2,
    borderColor: 'black',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    height: 45,
    width: '99%',
  },
  searchInput: {
    fontFamily: 'Montserrat-Medium',
    color: 'black',
    fontSize: 14,
  },
  filterSection: {
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    height: 35,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  pickeritem: {fontFamily: 'Roboto-Regular', fontSize: 15},
  filterbtntext: {
    color: 'white',
    textAlign: 'center',
  },
  btnSearch: {
    width: '100%',
    borderRadius: 10,
    height: 45,
    justifyContent: 'center',
    backgroundColor: '#5784BA',
    marginTop: 5,
    marginBottom: 12,
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
    paddingRight: '3%',
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
  servererror: {
    padding: 8,
  },
  texterror: {
    textAlign: 'center',
    fontFamily: 'Kanit-Regular',
    color: 'red',
    borderRadius: 20,
  },
  loading: {
    textAlign: 'center',
    fontFamily: 'Kanit-Regular',
    color: '#5784BA',
    fontSize: 15,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftpagination: {
    marginTop: '1%',
    flexDirection: 'row',
  },
  paginationinfo: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: 'black',
  },
  rightpagination: {
    marginTop: '7%',
    flexDirection: 'row',
  },
  paginationbtndisable: {
    width: 30,
    height: 30,
    backgroundColor: '#ADA9A9',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  paginationbtn: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  paginationbtnactive: {
    width: 30,
    height: 30,
    backgroundColor: '#5784BA',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  paginationtext: {
    fontFamily: 'Kanit-Medium',
    fontSize: 14,
    color: 'black',
  },
  paginationtextactive: {
    fontFamily: 'Kanit-Medium',
    fontSize: 14,
    color: 'white',
  },
});
export default classes;
