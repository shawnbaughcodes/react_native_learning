import Expo, { Notifications } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import registerForNotifications from './services/push_notifications';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

export default class App extends React.Component {
    componentDidMount() {
        registerForNotifications();
        Notifications.addListener((notification) => {
            const { data: { text } } = notification
            if (orgin === 'recieved' && text) {
                Alert.alert(
                    'New push notification',
                    text,
                    [{ text: 'Ok' }]
                );
            }
        })
    }
  render() {
    const RootNavigator = TabNavigator({
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        main: {
            screen: TabNavigator({``
                map: { screen: MapScreen },
                deck: { screen: DeckScreen },
                review: {
                    screen: StackNavigator({
                        review: { screen: ReviewScreen },
                        settings: { screen: SettingsScreen }
                    })
                }
            }, {
                tabBarPosition: 'bottom',
                swipeEnabled: false,
                tabBarOptions: {
                    labelStyle: { fontSize: 12 }
                }
            })
        }
    }, {
        navigationOptions: {
            tabBarVisible: false
        },
        lazy: true
    });

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <RootNavigator />
            </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
