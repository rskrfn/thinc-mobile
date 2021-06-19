import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {Item, Picker} from 'native-base';
import classes from './Styles';
import MyClassFacilitator from './MyClassFacilitator';
import MemberIcon from '../../../assets/icons/icon_student.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Facilitator = props => {
  const [date, setDate] = useState(new Date());
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showStartModal, setShowStart] = useState(false);
  const [showEndModal, setShowEnd] = useState(false);
  const myClassDummy = [
    {
      classname: 'Class one',
      student: 24,
    },
    {
      classname: 'Class two',
      student: 32,
    },
    {
      classname: 'Class three',
      student: 28,
    },
    {
      classname: 'Class one',
      student: 24,
    },
    {
      classname: 'Class two',
      student: 32,
    },
    {
      classname: 'Class three',
      student: 28,
    },
  ];

  console.log(moment(date).format('HH : mm'));

  return (
    <ScrollView>
      <Modal
        transparent
        style={classes.modaldate}
        visible={showDate}
        onRequestClose={() => {
          setShowDate(false);
        }}>
        <View style={classes.modalcontainer}>
          <View style={classes.datepicker}>
            <DatePicker
              mode={'date'}
              date={date}
              onDateChange={value => {
                setDate(value);
              }}
            />
            <TouchableOpacity
              style={classes.modalbtn}
              onPress={() => {
                setShowDate(false);
              }}>
              <Text style={classes.modalbtntext}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        transparent
        style={classes.modaldate}
        visible={showStartModal}
        onRequestClose={() => {
          setShowStart(false);
        }}>
        <View style={classes.modalcontainer}>
          <View style={classes.datepicker}>
            <DatePicker
              mode="time"
              date={start}
              onDateChange={value => {
                setStart(value);
              }}
            />
            <TouchableOpacity
              style={classes.modalbtn}
              onPress={() => {
                setShowStart(false);
              }}>
              <Text style={classes.modalbtntext}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        transparent
        style={classes.modaldate}
        visible={showEndModal}
        onRequestClose={() => {
          setShowEnd(false);
        }}>
        <View style={classes.modalcontainer}>
          <View style={classes.datepicker}>
            <DatePicker
              mode="time"
              date={end}
              onDateChange={value => {
                setEnd(value);
              }}
            />
            <TouchableOpacity
              style={classes.modalbtn}
              onPress={() => {
                setShowEnd(false);
              }}>
              <Text style={classes.modalbtntext}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={classes.container}>
        <Text style={classes.textpage}>My class</Text>
        <View style={classes.header}>
          <Text style={classes.headmyclass}>Class Name</Text>
          <Text style={classes.headstudent}>Students</Text>
        </View>
      </View>
      <View style={classes.myclasscontainer}>
        {myClassDummy
          ? myClassDummy.slice(0, 3).map((item, index) => {
              // console.log(item);
              return (
                <TouchableOpacity style={classes.myclass} key={index}>
                  <Text style={classes.tableclassname}>{item.classname}</Text>
                  <View style={classes.tablestudent}>
                    <Text style={classes.studenttext}>{item.student}</Text>
                    <Image style={classes.studenticon} source={MemberIcon} />
                  </View>
                  <MaterialIcons
                    name="chevron-right"
                    color="black"
                    size={32}
                    style={classes.arrowicon}
                  />
                </TouchableOpacity>
              );
            })
          : null}
      </View>
      <View style={classes.allmyclass}>
        <Text
          style={classes.textallmyclass}
          onPress={() => props.navigation.navigate('MyClass')}>
          view all
        </Text>
        <MaterialIcons
          name="chevron-right"
          size={20}
          style={{marginTop: 1}}
          onPress={() => props.navigation.navigate('MyClass')}
        />
      </View>
      <View style={classes.createnewclass}>
        <Text style={classes.newclassheader}>Create new class</Text>
        <View style={classes.inputgroup}>
          <View style={classes.input}>
            <Text style={classes.inputdesc}>Class Name</Text>
            <Text>:</Text>
            <TextInput
              style={classes.inputbox}
              placeholder="Enter class name"
            />
          </View>
        </View>
        <View style={classes.inputgroup}>
          <View style={classes.input}>
            <Text style={classes.inputdesc}>Categories</Text>
            <Text>:</Text>
            <Item picker style={classes.categorypicker}>
              <Picker mode="dialog" style={{marginLeft: -15}}>
                <Picker.Item
                  label="Category"
                  value=""
                  style={classes.pickeritem}
                />
                <Picker.Item
                  label="Software"
                  value="software"
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
              </Picker>
            </Item>
          </View>
        </View>
        <View style={classes.inputgroup}>
          <View style={classes.input}>
            <Text style={classes.inputdesc}>Pricing</Text>
            <Text>:</Text>
            <Text style={{position: 'absolute', left: '32%'}}>$</Text>
            <TextInput
              style={{...classes.inputbox, paddingLeft: '5%'}}
              placeholder="Enter course price"
              keyboardType="number-pad"
            />
          </View>
        </View>
        <View style={classes.inputgroup}>
          <View style={{...classes.input, marginVertical: 10}}>
            <Text style={classes.inputdesc}>Schedule</Text>
            <Text>:</Text>
            <TouchableOpacity
              style={classes.schedule}
              onPress={() => {
                setShowDate(true);
              }}>
              <Text style={classes.date}>{moment(date).format('dddd')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowStart(true);
              }}>
              <Text style={classes.start}>
                {moment(start).format('hh:mm A')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowEnd(true);
              }}>
              <Text style={classes.end}>{moment(end).format('hh:mm A')}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={classes.inputgroup}>
          <View style={classes.input}>
            <Text style={classes.inputdesc}>Description</Text>
            <Text>:</Text>
          </View>
        </View>
        <TextInput
          style={classes.inputboxarea}
          multiline={true}
          numberOfLines={5}
          placeholder="Course description"
        />
        <TouchableOpacity style={classes.createbtn}>
          <Text style={classes.createbtntext}>Create</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Facilitator;
