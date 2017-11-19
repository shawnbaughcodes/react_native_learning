import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './Reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCSOrv10XbIV4kDdvfifl2tcoMs7TBxoYw',
            authDomain: 'manager-aaea2.firebaseapp.com',
            databaseURL: 'https://manager-aaea2.firebaseio.com',
            projectId: 'manager-aaea2',
            storageBucket: 'manager-aaea2.appspot.com',
            messagingSenderId: '541088234098'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
export default App;
