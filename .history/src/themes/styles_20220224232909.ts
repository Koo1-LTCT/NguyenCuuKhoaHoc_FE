import { StyleSheet } from 'react-native';
import colors from './colors';

const themeStyles = StyleSheet.create({
  iconField: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 10
    width: '90%',
    height: 45
    // backgroundColor: '#FFC0CB'
  },
  fieldIcon: {
    marginTop: 16,
    marginRight: 10,
    color: colors.blueGrey
  },
  icon: {
    color: colors.blueGrey
  }
});

export default themeStyles;
