import React from 'react';
import {StyleSheet} from 'react-native';
import Modal,{ModalProps} from 'react-native-modal';

interface Props extends ModalProps {
  children: React.ReactNode;
}

const CustomModal = ({children, ...props}: Props) => {
  return (
    <Modal
      {...props}
      style={[props.style, styles.removeModalMargin]}
      backdropOpacity={0.55}
      backdropColor={"#000"}
      onBackButtonPress={props.onModalHide}>
      {children}
    </Modal>
  );
};

export {CustomModal};

const styles = StyleSheet.create({removeModalMargin: {margin: 0}});
