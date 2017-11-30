import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
    componentDidMount() {
    const config = {
        apiKey: "AIzaSyAMM1Uffh1wMbPd2u6j6LWQ8dzVnO8k2cw",
        authDomain: "one-time-password-d12ad.firebaseapp.com",
        databaseURL: "https://one-time-password-d12ad.firebaseio.com",
        projectId: "one-time-password-d12ad",
        storageBucket: "one-time-password-d12ad.appspot.com",
        messagingSenderId: "835343794617"
        };
        firebase.initializeApp(config);
    }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
