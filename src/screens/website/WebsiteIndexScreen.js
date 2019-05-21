import React from 'react';

import { BrowserUI } from '../../components';

class WebsiteIndexScreen extends React.Component {

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
    WebsiteIndexScreen
};
