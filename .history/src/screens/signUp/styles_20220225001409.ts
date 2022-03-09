import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  signUpButton: {
    marginVertical: 30,
    alignSelf: 'center',
    height: 50,
    width: 200,
    borderRadius: 40,
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
