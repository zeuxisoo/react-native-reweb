/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';

//
const AppNavigator = createStackNavigator({
    Home: HomeScreen,
},{
    initialRouteName: "Home",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#9AD1C9',
        },
        headerTintColor: '#464646',
        headerTitleStyle: {
            fontWeight: 'bold',
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
