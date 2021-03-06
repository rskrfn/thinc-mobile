/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';
import {Button, Input, Icon, Item, Picker} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProgressCircle from 'react-native-progress-circle';
import classes from './Styles';
import axios from 'axios';
import {API_URL} from '@env';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import NotifService from '../../../../NotifService';
import {useSocket} from '../../../context/SocketProvider';

function Member({...props}) {
  const socket = useSocket();
  const [myClass, setMyClass] = useState();
  const [myclassLoad, setMyclassload] = useState(false);
  const [newClass, setNewClass] = useState([]);
  const [newclassLoad, setNewclassload] = useState(false);
  let [searchvalue, setSearch] = useState('');
  let [selectedCategory, setCategory] = useState(null);
  let [selectedLevel, setLevel] = useState(null);
  let [selectedPrice, setPrice] = useState(null);
  let [selectedSort, setSort] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const [info, setInfo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const userData = props.loginReducer.user?.data;
  const userId = props.loginReducer.user.data?.id;
  const TOKEN = props.loginReducer.user?.token;
  // console.log(props);

  const onNotif = notif => {
    Alert.alert(notif.title, notif.message);
  };

  const notif = new NotifService(onNotif);

  const getMyClass = () => {
    setMyclassload(true);
    let config = {
      method: 'GET',
      url: `${API_URL}/courses/myclass`,
      params: {
        id: userId,
        page: 1,
      },
    };
    axios(config)
      .then(res => {
        console.log('myclass', res.data.data.result);
        if (res.data.data.result.length > 0) {
          setMyClass(res.data.data.result);
          setMyclassload(false);
        } else {
          setMyClass('');
          setMyclassload(false);
        }
      })
      .catch(err => {
        console.log('myclass', {err});
        if (err.response.data?.message === 'Data not found') {
          setMyClass(false);
          setMyclassload(false);
        } else {
          setMyClass(null);
          setMyclassload(false);
        }
      });
  };

  const getNewClass = () => {
    setNewclassload(true);
    let config = {
      method: 'GET',
      url: `${API_URL}/courses/all`,
      params: {
        userid: userId,
        search: searchvalue,
        sort: selectedSort,
        category: selectedCategory,
        level: selectedLevel,
        price: selectedPrice,
        page: currentPage,
      },
    };
    axios(config)
      .then(res => {
        setNewClass(res.data.data.result);
        setInfo(res.data.data.info);
        setNewclassload(false);
      })
      .catch(() => {
        setCurrentPage(1);
        setNewClass(null);
        setNewclassload(false);
      });
  };

  const onRefresh = React.useCallback(async () => {
    try {
      setRefreshing(true);
      setMyClass('');
      setNewClass('');
      await getMyClass();
      await getNewClass();
      setCurrentPage(1);
      setCategory(null);
      setLevel(null);
      setPrice(null);
      setSort(null);
      setSearch('');
      setRefreshing(false);
    } catch (err) {
      console.log({err});
    }
  }, []);

  const setColor = score => {
    if (myClass) {
      if (Number(score) > 90) {
        return '#2BE6AE';
      } else if (Number(score) > 70) {
        return '#51E72B';
      } else if (Number(score) > 50) {
        return '#CCE72B';
      } else if (Number(score) > 30) {
        return '#E7852B';
      } else {
        return '#E6422B';
      }
    }
  };

  const onRegisterCourse = async (id, name, ownerId) => {
    try {
      let config = {
        method: 'POST',
        url: `${API_URL}/courses/register`,
        data: {userid: userId, courseid: id},
        headers: {'x-access-token': TOKEN},
      };
      axios(config)
        .then(res => {
          if (res.status === 200) {
            onRefresh();
            console.log('owner course', ownerId);
            let owner = {
              id: ownerId,
              coursename: name,
            };
            let sender = {
              id: userData.id,
              name: userData.name,
            };
            let cb = ({status}) => {
              console.log('status', status);
            };
            socket.emit('course-register', owner, sender, cb);
            return notif.localNotif('', `Successfully register on ${name}`);
          }
        })
        .catch(err => console.log({err}));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMyClass();
  }, []);
  // console.log(searchvalue);

  const pageList = () => {
    let pages = [];
    for (let i = 1; i <= info?.totalPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = pageList();

  useEffect(() => {
    getNewClass();
  }, [currentPage]);
  // console.log(currentPage);
  console.log('hasil', myClass);
  return (
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={classes.container}>
        <Text style={classes.textpage}>My class</Text>
        <View style={classes.header}>
          <Text style={classes.headmyclass}>Class Name</Text>
          <Text style={classes.headprogress}>Progress</Text>
          <Text style={classes.headscore}>Score</Text>
        </View>
        {myclassLoad === false ? (
          myClass ? (
            myClass.slice(0, 3).map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={classes.myclass}
                  onPress={() => {
                    props.navigation.navigate('ClassDetail', {
                      ...item,
                    });
                  }}>
                  <Text style={classes.tableclassname}>{item.Name}</Text>
                  <View style={classes.tableprogress}>
                    <ProgressCircle
                      percent={Number(
                        ((item.progress / item.totalsubcourse) * 100).toFixed(
                          0,
                        ),
                      )}
                      radius={20}
                      borderWidth={2.8}
                      color="#5784BA"
                      shadowColor="#E5E6EB"
                      bgColor="#fff">
                      <Text style={classes.textprogress}>
                        {((item.progress / item.totalsubcourse) * 100).toFixed(
                          0,
                        ) + '%'}
                      </Text>
                    </ProgressCircle>
                  </View>
                  {item.score ? (
                    <Text
                      style={{
                        ...classes.tablescore,
                        color: setColor(item.score.slice(0, 2)),
                      }}>
                      {item.score.slice(0, 2)}
                    </Text>
                  ) : (
                    <View style={classes.unfinishedcontainer}>
                      <Text style={classes.unfinishtext}>Unfinished</Text>
                    </View>
                  )}
                  <MaterialIcons
                    name="more-vert"
                    color="#D2DEED"
                    size={32}
                    style={{
                      position: 'absolute',
                      right: 1,
                    }}
                  />
                </TouchableOpacity>
              );
            })
          ) : myClass === false ? (
            <View style={classes.servererror}>
              <Text style={classes.loading}>
                Seems you haven't registered into any course
              </Text>
            </View>
          ) : (
            <View style={classes.servererror}>
              <Text style={classes.texterror}>404</Text>
              <Text style={classes.texterror}>Server Error</Text>
            </View>
          )
        ) : (
          <Text style={classes.loading}>Loading...</Text>
        )}
        <View style={classes.allmyclass}>
          <Text
            style={classes.textallmyclass}
            onPress={() => props.navigation.navigate('MyClass')}>
            view all
          </Text>
          <Icon
            name="chevron-forward"
            style={{fontSize: 14}}
            onPress={() => props.navigation.navigate('MyClass')}
          />
        </View>
        <View style={classes.newClassSection}>
          <Text style={{...classes.newclassheader}}>New class</Text>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={classes.searchSection}>
              <Item style={classes.searchInputContainer}>
                <MaterialIcons name="search" color={'#ADA9A9'} size={24} />
                <Input
                  placeholder="Quick search"
                  placeholderTextColor="#ADA9A9"
                  style={classes.searchInput}
                  value={searchvalue}
                  onChangeText={value => {
                    // console.log(value);
                    setSearch(value);
                  }}
                />
              </Item>
            </View>
          </TouchableWithoutFeedback>
          <ScrollView
            horizontal
            style={classes.filterSection}
            showsHorizontalScrollIndicator={false}>
            <Item picker style={{width: 95, overflow: 'hidden'}}>
              <Picker
                mode="dialog"
                style={{width: 140}}
                selectedValue={selectedCategory}
                onValueChange={e => {
                  setCategory(e);
                }}>
                <Picker.Item
                  label="Category"
                  value=""
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Software"
                  value="Software"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="History"
                  value="History"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Psychology"
                  value="Psychology"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Finance"
                  value="Finance"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Mathemathics"
                  value="Math"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Science"
                  value="Science"
                  style={classes.pickeritem}
                />
              </Picker>
              <MaterialIcons
                name="expand-more"
                size={18}
                style={{position: 'absolute', right: 0}}
              />
            </Item>
            <Item picker style={{width: 75, overflow: 'hidden'}}>
              <Picker
                mode="dialog"
                style={{width: 120}}
                selectedValue={selectedLevel}
                onValueChange={e => setLevel(e)}>
                <Picker.Item
                  label="Level"
                  value=""
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Beginner"
                  value="Beginner"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Intermediate"
                  value="Intermediate"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Advance"
                  value="Advance"
                  style={classes.pickeritem}
                />
              </Picker>
              <MaterialIcons
                name="expand-more"
                size={18}
                style={{position: 'absolute', right: 0}}
              />
            </Item>
            <Item picker style={{width: 75, overflow: 'hidden'}}>
              <Picker
                mode="dialog"
                style={{width: 140}}
                selectedValue={selectedPrice}
                onValueChange={e => {
                  setPrice(e);
                }}>
                <Picker.Item
                  label="Price"
                  value=""
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Free"
                  value="0"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="$10"
                  value="10"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="$50"
                  value="50"
                  style={classes.pickeritem}
                />
              </Picker>
              <MaterialIcons
                name="expand-more"
                size={18}
                style={{position: 'absolute', right: 0}}
              />
            </Item>
            <Item picker style={{width: 110, overflow: 'hidden'}}>
              <Picker
                mode="dialog"
                style={{width: 140}}
                selectedValue={selectedSort}
                onValueChange={e => setSort(e)}>
                <Picker.Item
                  label="Sort By"
                  value=""
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Category ASC"
                  value="Category-AZ"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Category DESC"
                  value="Category-ZA"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Level ASC"
                  value="Level-AZ"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Level DESC"
                  value="Level-ZA"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Price ASC"
                  value="Price-AZ"
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Price DESC"
                  value="Price-ZA"
                  style={classes.pickeritem}
                />
              </Picker>
              <MaterialIcons
                name="expand-more"
                size={18}
                style={{position: 'absolute', right: 18}}
              />
            </Item>
          </ScrollView>
          <Button
            style={classes.btnSearch}
            onPress={() => {
              getNewClass();
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 13,
                textAlign: 'center',
              }}>
              Search
            </Text>
          </Button>
          <View style={classes.header}>
            <Text style={classes.headname}>Class Name</Text>
            <Text style={classes.headlevel}>Level</Text>
            <Text style={classes.headprice}>Price</Text>
          </View>
          <View style={classes.newClassItems}>
            {newclassLoad === false ? (
              newClass !== null ? (
                <FlatList
                  scrollEnabled={false}
                  data={newClass}
                  keyExtractor={(item, index) => {
                    return index.toString();
                  }}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        style={classes.newClassItem}
                        onPress={() => {
                          props.navigation.navigate('ClassDetail', {
                            ...item,
                          });
                        }}>
                        <Text style={classes.newClassName}>
                          {item.Name && item.Name.length > 25
                            ? item.Name.slice(0, 25) + '...'
                            : item.Name}
                        </Text>
                        <Text style={classes.newlevel}>{item.Level}</Text>
                        <Text style={classes.newprice}>
                          {item.Price === 0 ? 'Free' : '$' + item.Price}
                        </Text>
                        <TouchableOpacity
                          style={classes.newbtnregister}
                          onPress={async () => {
                            onRegisterCourse(item.id, item.Name, item.Owner);
                          }}>
                          <Text style={classes.txtRegister}>Register</Text>
                        </TouchableOpacity>
                      </TouchableOpacity>
                    );
                  }}
                />
              ) : (
                <View style={classes.servererror}>
                  <Text style={classes.texterror}>404</Text>
                  <Text style={classes.texterror}>Data Not Found</Text>
                </View>
              )
            ) : (
              <Text style={classes.loading}>Loading...</Text>
            )}
          </View>
        </View>
        <View style={classes.pagination}>
          <View style={classes.leftpagination}>
            <Text style={classes.paginationinfo}>Showing</Text>
            <Text style={classes.paginationinfo}>
              {' '}
              {(info?.currpage - 1) * 10 + (newClass?.length || 0)}{' '}
            </Text>
            <Text style={classes.paginationinfo}>out of</Text>
            <Text style={classes.paginationinfo}>
              {newClass ? ' ' + info?.count : ' ' + 0}
            </Text>
          </View>
          <View style={classes.rightpagination}>
            <TouchableOpacity
              style={
                info?.prev !== null
                  ? classes.paginationbtn
                  : classes.paginationbtndisable
              }
              disabled={!info?.prev}
              onPress={() => {
                if (info?.prev === null) {
                  return;
                }
                setCurrentPage(currentPage - 1);
              }}>
              <MaterialIcons
                name="chevron-left"
                size={24}
                color={!info?.prev ? 'white' : 'black'}
              />
            </TouchableOpacity>
            {pages.map((page, index) => {
              return (
                <TouchableOpacity
                  style={
                    currentPage === page
                      ? classes.paginationbtnactive
                      : classes.paginationbtn
                  }
                  key={index}
                  onPress={() => {
                    setCurrentPage(page);
                  }}>
                  <Text
                    style={
                      currentPage === page
                        ? classes.paginationtextactive
                        : classes.paginationtext
                    }>
                    {page}
                  </Text>
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity
              style={
                info?.next !== null
                  ? classes.paginationbtn
                  : classes.paginationbtndisable
              }
              disabled={!info?.next}
              onPress={() => {
                if (currentPage === info?.totalPage) {
                  return;
                }
                setCurrentPage(currentPage + 1);
              }}>
              <MaterialIcons
                name="chevron-right"
                size={24}
                color={!info?.next ? 'white' : 'black'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const mapStatetoProps = state => {
  return {
    loginReducer: state.loginReducers,
  };
};
const connectedMember = connect(mapStatetoProps)(Member);
export default connectedMember;
