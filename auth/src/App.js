import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './Components/Common';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
                apiKey: "AIzaSyDF-Fg7QpB5FXbn63Xcw54m1LZ6x6hV8-8",
                authDomain: "auth-ad64a.firebaseapp.com",
                databaseURL: "https://auth-ad64a.firebaseio.com",
                projectId: "auth-ad64a",
                storageBucket: "auth-ad64a.appspot.com",
                messagingSenderId: "82160204889"
        })
    };


    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
}
export default App;
