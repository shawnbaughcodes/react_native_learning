import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from './Components/Common';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';

class App extends Component {
    state = { loggedIn: null };
    componentWillMount() {
        firebase.initializeApp({
                apiKey: "AIzaSyDF-Fg7QpB5FXbn63Xcw54m1LZ6x6hV8-8",
                authDomain: "auth-ad64a.firebaseapp.com",
                databaseURL: "https://auth-ad64a.firebaseio.com",
                projectId: "auth-ad64a",
                storageBucket: "auth-ad64a.appspot.com",
                messagingSenderId: "82160204889"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false })
            }
        });
    };
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                    Logout</Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner />
        }
    }


    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                    {this.renderContent()}
            </View>
        )
    }
}
export default App;
