import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  signUpButton: {
    marginVertical: 30,
    height: 50,
    width: '85%',
    borderRadius: 40,
    alignSelf: 'center',
    backgroundColor: 'blue'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  signInButton: {
    marginLeft: 5
  },
  termPolicy: {
    flexDirection: 'column',
    marginTop: 10
  },
  message: {
    textAlign: 'center'
  }
});
