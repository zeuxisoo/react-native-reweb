import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import { colors } from './config';
import { WebsiteIndexScreen, WebsiteCreateScreen, WebsiteShowScreen } from './screens';
import store from './redux/store';
import DBHelper from './db/DBHelper';

//
console.disableYellowBox = true;

//
(new DBHelper()).open();

//
const AppNavigator = createStackNavigator({
    WebsiteIndexScreen : WebsiteIndexScreen,
    WebsiteCreateScreen: WebsiteCreateScreen,
    WebsiteShowScreen  : WebsiteShowScreen,
},{
    initialRouteName: "WebsiteIndexScreen",
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
