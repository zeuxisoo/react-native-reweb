import React from 'react';

import { BrowserUI } from '../../containers';

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
