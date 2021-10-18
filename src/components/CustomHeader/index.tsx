import {useNavigation} from '@react-navigation/core';
import React from 'react';
import { Pressable, StyleSheet, View,TouchableOpacity} from 'react-native';
import {Appbar, Button, List, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import {COLORS} from '../../constants';
import {calcFont, calcWidth, SCREEN_WIDTH} from '../../constants/sizes';
import NotificationsCount from '../NotificationsCounter';
interface Props {
  hideBack?: boolean;
  hideTitle?: boolean;
  withBorder?: boolean;
  hideEndAction?: boolean;
  endActionType?: 'text' | 'icon'|'notifications';
  endActionTitle?: string;
  title?: string;
  onEndActionPressed?: () => void;
}

const CustomHeader = ({
  hideBack,
  hideTitle,
  hideEndAction,
  endActionType,
  endActionTitle,
  title,
  withBorder,
   onEndActionPressed, 
}: Props) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header
      style={[styles.APPBAR, {borderBottomWidth: withBorder ? 1 : 0}]}>
      {!hideBack ? (
        <Appbar.Action
          icon={() => <Icon name="arrow-left" size={19} color={COLORS.GRAYCOAL}/>}
          onPress={() => navigation.goBack()}
          style={styles.appbarAction}
        />
      ) : (
        <Appbar.Action style={styles.appbarAction} />
      )}
      {!hideTitle ? (
        <Appbar.Content
          title={title}
          style={styles.appbarContent}
          titleStyle={styles.title}
        />
      )  : (
        <Appbar.Content />
      )}

      {!hideEndAction && endActionType === 'icon' && (
        <View style={{flexDirection:'row'}}>
       
        </View>
      )}
       {!hideEndAction && endActionType === 'notifications' && (
      <NotificationsCount counter={5}/>           
      )}
      {!endActionType && <Appbar.Action style={styles.appbarAction} />}
    </Appbar.Header>
  );
};

export {CustomHeader};

const styles = StyleSheet.create({
  APPBAR: {
    width: SCREEN_WIDTH,
    elevation: 0,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center'
  },
  title: {
    fontSize: calcFont(16),
    fontWeight: '600',
    fontStyle: 'normal',
    textTransform: 'capitalize',
    alignSelf:'center',
    color:COLORS.SECONDARYCOLOR
    

  },
  appbarAction: {
    marginStart: 0,
    marginEnd: 0,
    alignSelf:'center'
  },
  appbarContent: {
    alignItems: 'center',
    marginStart: 0,
    marginEnd: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  endActionText: {
    color: COLORS.MAINCOLOR,
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: calcFont(16),
    letterSpacing: calcFont(-0.28),
    marginHorizontal: 10,
    marginVertical: 0,
  },
  textButton: {
    justifyContent: 'center',
    width: 'auto',
    borderRadius: 0,
  },
  logoImg: {width: 150, height: 40},
});
