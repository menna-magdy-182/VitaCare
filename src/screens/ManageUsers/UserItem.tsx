import React from "react";
import { Switch, View,StyleSheet, Platform } from "react-native";
import { COLORS } from "../../constants";
import { calcFont } from "../../constants/sizes";
import {Text} from 'react-native-paper';
import { userType } from ".";
interface props{
  onSwitchItem:()=>void;
  item:userType
}
const UserItem = ({item,onSwitchItem}) => {
    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.nameText}>
          {item.firstname} {item.lastname}
        </Text>
        {!(item.active === undefined) && (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: item.active ? COLORS.ATLANTIS : COLORS.RED}}>
              {item.active ? 'Active' : 'Disabled'}
            </Text>
            <Switch
            onChange={onSwitchItem}
              style={styles.switch}
              value={item.active}
              trackColor={{false: COLORS.RED, true: COLORS.ATLANTIS}}
              thumbColor={'#fff'}
              ios_backgroundColor={item.active ? COLORS.ATLANTIS : COLORS.RED}
            />
          </View>
        )}
      </View>
    );
  };

  export default UserItem;

  const styles = StyleSheet.create({ 
    listItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: calcFont(10),
      height: calcFont(65),
      marginTop: calcFont(20),
      marginHorizontal: calcFont(20),
      borderRadius: 10,
      backgroundColor: COLORS.MAINCOLOR,
    },
    switch: {
      transform: Platform.OS=="ios"?[{scaleX: 0.7}, {scaleY: 0.7}]:[],
    },
    nameText: {
      fontSize: calcFont(16),
      color: COLORS.GRAYCOAL,
    },
    switchValueText: {
      fontSize: calcFont(14),
      color: COLORS.GRAYCOAL,
    },
  });
  