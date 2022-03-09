import { BackHandler, StyleSheet } from 'react-native';

export default StyleSheet.create({
  logo: {
    marginBottom: 80,
    height: 200,
    width: 200,
    resizeMode: 'contain'
  },
  signInButton: {
    marginVertical: 30,
    alignSelf: 'center',
    backgroundColor: 'blue'
  },
  forgotPasswordButton: {
    marginTop: 6,
    alignSelf: 'flex-end'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  signUpButton: {
    marginLeft: 5
  }
});
