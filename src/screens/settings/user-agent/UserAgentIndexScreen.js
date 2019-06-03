import React from 'react';

import { HeaderMaterialButtons, HeaderMaterialItem } from '../../../components';
import { UserAgentList } from '../../../containers';

class UserAgentIndexScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "User Agent",
            headerRight: (
                <HeaderMaterialButtons>
                    <HeaderMaterialItem title="add" iconName="add" onPress={() => navigation.navigate('UserAgentCreateScreen')} />
                </HeaderMaterialButtons>
            )
        }
    }

    handleItemPress(userAgent) {
        // Nothing to do when click on user agent item
    }

    render() {
        return (
            <UserAgentList navigation={this.props.navigation} onItemPress={(userAgent) => this.handleItemPress(userAgent)} />
        );
    }

}

export {
    UserAgentIndexScreen
};
