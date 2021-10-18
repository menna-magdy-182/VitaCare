import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet,TextInput} from 'react-native';
import {Text,} from 'react-native-paper';
import {CustomButton, CustomHeader} from '../../components';
import {COLORS, CommonStyles} from '../../constants';
import Colors from '../../constants/Colors';
import {calcFont} from '../../constants/sizes';


const AddUser = ({}) => {
  const navigation = useNavigation();

  return (
    <View style={CommonStyles.screensContainer}>
      <CustomHeader title="Add New User" endActionType="notifications" />
      <View style={styles.contentContainer}>
        <Text style={styles.labelStyle}>Full Name</Text>
        <TextInput style={styles.textInputStyle} />
        <Text style={styles.labelStyle}>Mobile Number</Text>
        <TextInput style={styles.textInputStyle} />
      </View>
      <CustomButton style={{marginBottom: calcFont(20)}}>
        {'add user'}
      </CustomButton>

    </View>
  );
};

export default AddUser;
const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: COLORS.MAINCOLOR,
    marginVertical: calcFont(20),
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 0,
    borderColor: 'transparent',
    height:calcFont(58),
    paddingHorizontal:20,
    marginTop:0
  },
  labelStyle: {
    color: Colors.GRAYCOAL,
    marginBottom:calcFont(13)
  },
  contentContainer: {
    marginHorizontal: calcFont(17),
    paddingTop: calcFont(20),
    flexGrow: 1,
  },
});
