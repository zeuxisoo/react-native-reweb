import React from 'react';
import { Provider } from 'react-redux';

import { AppDrawerNavigator } from './navigators';
import store from './redux/store';
import DBHelper from './db/DBHelper';

//
console.disableYellowBox = true;

//
(new DBHelper()).open();

//
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppDrawerNavigator />
            </Provider>
        );
    }
}
