import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './Reducer';
import { Header } from './Components/Common';
import LibraryList from './Components/LibraryList';

const App = () => {
    return (
        <Provider store={createStore(Reducer)}>
            <View style={{ flex: 1 }}>
                <Header headerText="Tech Stacks" />
                <LibraryList />
            </View>
        </Provider>
    );
};
export default App;
