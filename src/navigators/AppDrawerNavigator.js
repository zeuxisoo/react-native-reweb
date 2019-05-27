import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import WebsiteStackNavigator from './WebsiteStackNavigator';
import AppDrawerMenu from './AppDrawerMenu';

//
const AppDrawerNavigator = createDrawerNavigator({
    Home: WebsiteStackNavigator,
}, {
    contentComponent: AppDrawerMenu
});

//
const AppDrawerContainer = createAppContainer(AppDrawerNavigator);

//
export default AppDrawerContainer;
