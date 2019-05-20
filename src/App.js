import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import { colors } from './config';
import { HomeScreen, WebsiteCreateScreen, WebsiteIndexScreen } from './screens';
import store from './redux/store';
import DBHelper from './db/DBHelper';

//
console.disableYellowBox = true;

//
(new DBHelper()).open();

//
const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    WebsiteCreateScreen: WebsiteCreateScreen,
    WebsiteIndexScreen: WebsiteIndexScreen,
},{
    initialRouteName: "Home",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTintColor: colors.secondary,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerBackTitleStyle: {
            color: colors.secondary,
        },
    },
});

//
const AppContainer = createAppContainer(AppNavigator);

//
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}
