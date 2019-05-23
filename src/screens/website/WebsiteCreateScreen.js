import React from 'react';

import { WebsiteCreateForm } from '../../containers';

class WebsiteCreateScreen extends React.Component {

    static navigationOptions = {
        title: "Create Website"
    }

    render() {
        return <WebsiteCreateForm />
    }

}

export {
    WebsiteCreateScreen
};
