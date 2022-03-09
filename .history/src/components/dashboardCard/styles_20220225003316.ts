import colors from '@src/themes/colors';
import variables from '@src/themes/variables';
import { ceil } from 'lodash';
import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  title: {
    fontSize: variables.fontSizeHeading3,
    color: 'white'
  },
  card: {
    width: width * 0.4,
    height: width * 0.5,
    padding: 18,
    margin: width * 0.05,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: variables.borderRadius,
    backgroundColor: '#1fc7d4',
    shadowRadius: variables.borderRadius,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    elevation: 2
  },
  icon: {
    color: '#1fc7d4',
    width: 70,
    height: 70,
    alignItems: 'center',
    opacity: '2',
    backgroundColor: 'white',
    fontSize: 40,
    marginBottom: 30
  }
});
