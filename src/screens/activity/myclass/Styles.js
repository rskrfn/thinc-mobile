import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight();

const classes = StyleSheet.create({
  container: {
    backgroundColor: '#E6EDF6',
    flex: 1,
  },
  header: {
    paddingTop: statusBarHeight + 16,
    backgroundColor: '#5784BA',
    paddingHorizontal: 16,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    paddingBottom: 24,
  },
  infosection: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Kanit-Medium',
    fontSize: 28,
    color: 'white',
  },
  maincontent: {
    paddingHorizontal: 8,
  },
  servererror: {
    padding: 8,
  },
  loading: {
    textAlign: 'center',
    fontFamily: 'Kanit-Regular',
    color: '#5784BA',
    fontSize: 15,
  },
});
export default classes;
