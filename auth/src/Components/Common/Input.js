import React from 'react';
import { View, Text, TextINput } from 'react-native';

const Input = ({ label }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput />
        </View>
    );
};
export { Input };
