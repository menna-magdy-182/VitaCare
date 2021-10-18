import {StyleSheet} from 'react-native';
import COLORS from './colors';
import {calcFont, SCREEN_HEIGHT, SCREEN_WIDTH} from './sizes';
const styles = StyleSheet.create({
  screensContainer: {
    flex: 1, 
    backgroundColor: '#fff',
  },
  helperText: {
    marginStart: 0,
    paddingStart: 0,
    fontSize: calcFont(14),
    marginTop: 0,
    marginBottom: 0,
    textTransform: 'capitalize',
  },


});

export default styles;
