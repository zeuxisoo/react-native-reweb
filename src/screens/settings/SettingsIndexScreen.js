import React from 'react';

import { HeaderMaterialButtons, HeaderMaterialItem } from '../../components';
import { SettingsUI } from '../../containers';

class SettingsIndexScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Settings",
            headerLeft: (
                <HeaderMaterialButtons>
                    <HeaderMaterialItem title="menu" iconName="reorder" onPress={() => navigation.toggleDrawer()} />
                </HeaderMaterialButtons>
            ),
        }
    }

    render() {
        return (
            <SettingsUI navigation={this.props.navigation} />
        );
    }

}

export {
    SettingsIndexScreen
};
