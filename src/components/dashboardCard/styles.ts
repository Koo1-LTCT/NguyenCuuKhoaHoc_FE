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
    backgroundColor: 'blue',
    shadowRadius: variables.borderRadius,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    elevation: 2
  },
  icon: {
    color: 'blue',
    width: 70,
    height: 70,
    paddingLeft: 10,
    paddingTop: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    fontSize: 50,
    marginBottom: 30
  }
});
