import React from 'react';

import { BrowserUI } from '../../components';

class WebsiteShowScreen extends React.Component {

    static navigationOptions = ({ navigation }) =>({
        header: null,
    });

    render() {
        return (
            <BrowserUI navigation={this.props.navigation} />
        );
    }

}

export {
    WebsiteShowScreen
};
