import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import WebsiteStackNavigator from './WebsiteStackNavigator';

//
const AppDrawerNavigator = createDrawerNavigator({
    Home: WebsiteStackNavigator,
});

//
const AppDrawerContainer = createAppContainer(AppDrawerNavigator);

//
export default AppDrawerContainer;
