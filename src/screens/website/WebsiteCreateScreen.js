import React from 'react';

import { CreateWebsiteForm } from '../../containers';

class WebsiteCreateScreen extends React.Component {

    static navigationOptions = {
        title: "Create Website"
    }

    render() {
        return <CreateWebsiteForm />
    }

}

export {
    WebsiteCreateScreen
};
