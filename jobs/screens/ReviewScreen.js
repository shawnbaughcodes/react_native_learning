import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
            title: 'Review Jobs',
            style: {
                marginTop: Platform.OS === 'android' ? 24 : 0
            },
            headerRight:
                <Button
                    title="Settings"
                    backgroundColor="rgba(0,0,0,0)"
                    color="rgba(0,122,255,1)"
                    onPress={() => { navigation.navigate('settings'); }}/>
        })


    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}
export default ReviewScreen;