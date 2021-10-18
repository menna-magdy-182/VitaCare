import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/EvilIcons';
import {COLORS} from '../../constants';
const NotificationsCount = ({counter}: {counter: number}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="bell" size={30} color={COLORS.GRAYCOAL} />
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>5</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationsCount;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingTop: 5,
  },
  numberContainer: {
    position: 'absolute',
    backgroundColor: COLORS.ATLANTIS,
    top: 0,
    right: 0,
    width: 17,
    height: 17,
    borderRadius: 7,
    justifyContent:'center'
  },
  numberText:{
    color: '#fff', fontSize: 12,alignSelf:'center'
  }
});
