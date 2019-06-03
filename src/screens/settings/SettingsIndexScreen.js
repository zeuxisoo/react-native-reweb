import React from 'react';

import { SettingsUI } from '../../containers';

class SettingsIndexScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Settings",
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
