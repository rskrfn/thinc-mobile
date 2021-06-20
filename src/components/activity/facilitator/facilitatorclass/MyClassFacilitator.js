import React from 'react';
import {Text, View, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import classes from './Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MemberIcon from '../../../../assets/icons/icon_student.png';

function MyClassFacilitator({...props}) {
  console.log({props});
  const myClass = props.route?.params?.data;

  return (
    <>
      <View style={classes.container}>
        <View style={classes.header}>
          <View style={classes.infosection}>
            <Text style={classes.title}>Activity</Text>
          </View>
        </View>
        <View style={classes.tableheader}>
          <Text style={classes.headmyclass}>Class Name</Text>
          <Text style={classes.headstudent}>Student</Text>
        </View>
        {myClass
          ? myClass.map((item, index) => {
              // console.log(item);
              return (
                <TouchableOpacity style={classes.myclass} key={index}>
                  <Text style={classes.tableclassname}>{item.course_name}</Text>
                  <View style={classes.tablestudent}>
                    <Text style={classes.studenttext}>{item.students}</Text>
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
    </>
  );
}

export default MyClassFacilitator;
