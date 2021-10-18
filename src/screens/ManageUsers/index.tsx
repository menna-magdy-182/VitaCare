import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {useState} from 'react';
import {View, StyleSheet, FlatList, Switch} from 'react-native';
import {CustomButton, CustomModal} from '../../components';
import {CustomHeader} from '../../components/CustomHeader';
import {COLORS, CommonStyles} from '../../constants';
import styles from '../../constants/CommonStyles';
import {calcFont, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/sizes';
import ConfirmationModal from './ConfirmationModal';
import {mockData} from './mockData.json';
import UserItem from './UserItem';

export interface userType {
  firstname: string;
  lastname: string;
  active: boolean;
}
const ManageUsers = ({}) => {
  const navigation = useNavigation();
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const onSwitchItem = item => {
    if(item.active)
    setConfirmationVisible(true);
  };
  return (
    <View style={CommonStyles.screensContainer}>
      <CustomHeader title="Manage Users" endActionType="notifications" />
      <UserItem item={{firstname: 'Ahmed', lastname: 'Mohamed - You',active:undefined}} />
      <FlatList<userType>
        data={mockData}
        renderItem={({item, index}) => (
          <UserItem item={item} onSwitchItem={() => onSwitchItem(item)} />
        )}
      />
      <View style={{width:SCREEN_WIDTH,backgroundColor:'#EEE',height:1,marginBottom:calcFont(20)}}/>
      <CustomButton
        style={{marginBottom: calcFont(20)}}
        onPress={() => navigation.navigate('AddUser')}>
        {'add new user'}
      </CustomButton>
      <ConfirmationModal
        name="Ahmed Mohamed"
        isVisible={confirmationVisible}
        onClose={() => setConfirmationVisible(false)}
        onConfirm={() => {}}
      />
    </View>
  );
};

export default ManageUsers;
