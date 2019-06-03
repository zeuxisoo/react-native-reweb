import React from 'react';

import { UserAgentCreateForm } from '../../../containers';

class UserAgentCreateScreen extends React.Component {

    static navigationOptions = {
        title: "Create User Agent"
    }

    render() {
        return (
            <UserAgentCreateForm />
        );
    }

}

export {
    UserAgentCreateScreen
};
