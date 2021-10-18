import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {COLORS} from '../../constants';
import {calcFont, calcHeight, calcWidth} from '../../constants/sizes';
type Props = React.ComponentProps<typeof Button>;

const CustomButton = ({...props}: Props) => {
  return (
    <Button
      color={COLORS.MAINCOLOR}
      {...props}
      style={[
        styles.button,
        props.style,
        {
          borderColor:
            props.mode == 'outlined' ? COLORS.MAINCOLOR : 'transparent',
        },
      ]}
      labelStyle={[styles.label, props.labelStyle]}>
      {props.children || 'click here'}
    </Button>
  );
};

export {CustomButton};

const styles = StyleSheet.create({
  button: {
    width: calcWidth(335),
    height: calcHeight(48),
    borderRadius: calcFont(6),
    borderWidth:1,
    backgroundColor:COLORS.SECONDARYCOLOR,
    alignSelf:'center',
    justifyContent:'center'
  },
  label: {
    fontSize: calcFont(14),
    fontStyle: 'normal',
    letterSpacing: calcFont(0.8),
    textTransform: 'capitalize' 
  },
});
