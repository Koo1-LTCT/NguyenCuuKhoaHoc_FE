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
    height: 50,
    width: '85%',
    borderRadius: 40,
    alignSelf: 'center',
    backgroundColor: 'blue'
  },
  forgotPasswordButton: {
    marginTop: 6,
    alignSelf: 'center'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  signUpButton: {
    marginLeft: 5
  }
});
