import { BackHandler, StyleSheet } from 'react-native';

export default StyleSheet.create({
  logo: {
    marginBottom: 80,
    height: 100,
    width: 250,
    resizeMode: 'cover',
    borderRadius: 20
    // backfaceVisibility: 'hidden'
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
