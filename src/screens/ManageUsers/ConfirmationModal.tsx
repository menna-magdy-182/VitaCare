import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CustomButton, CustomModal} from '../../components';
import {calcFont, SCREEN_WIDTH} from '../../constants/sizes';
import {Text} from 'react-native-paper';
import {COLORS} from '../../constants';
interface props {
  isVisible: boolean;
  name: string;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal = ({isVisible, onClose, onConfirm, name}: props) => {
  return (
    <CustomModal
      coverScreen={false}
      swipeDirection="down"
      isVisible={isVisible}
      onDismiss={onClose}
      onRequestClose={onClose}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            Are You Sure You Want To Disable{' '}
            <Text style={styles.nameText}>{name}</Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: calcFont(30),
          }}>
          <CustomButton
            style={[styles.btns, {backgroundColor: COLORS.RED}]}
            onPress={onClose}>
            {'Disable'}
          </CustomButton>
          <CustomButton
            style={[styles.btns, {backgroundColor: COLORS.GRAY}]}
            onPress={onClose}>
            {'Cancel'}
          </CustomButton>
        </View>
      </View>
    </CustomModal>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: calcFont(15),
    paddingTop: calcFont(15),
    paddingBottom: calcFont(40),
    backgroundColor: '#fff',
    marginTop: 'auto',
  },
  cancelText: {
    marginBottom: calcFont(20),
    color: COLORS.ATLANTIS,
    fontSize: calcFont(15),
  },
  btns: {
    width: SCREEN_WIDTH * 0.44,
  },
  questionContainer: {width: SCREEN_WIDTH * 0.7, alignSelf: 'center'},
  questionText: {
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: '500',
  },
  nameText: {color: COLORS.SECONDARYCOLOR, fontWeight: '500'},
});
export default ConfirmationModal;
