import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import colors from './config/colors';

import { HomeScreen, UrlCreateScreen } from './screens';

//
const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    UrlCreateScreen: UrlCreateScreen,
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
        return <AppContainer />;
    }
}
