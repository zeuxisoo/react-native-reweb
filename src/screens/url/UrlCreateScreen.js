import React from 'react';
import { Card } from 'react-native-elements';

import { WebsiteInfoInput } from '../../components/input';
import { SecondaryButton } from '../../components/button';

class UrlCreateScreen extends React.Component {
    static navigationOptions = {
        title: "Create Url"
    }

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            url : "",
        };
    }

    //
    handleNameChange(name) {
        this.setState({ name: name });
    }

    handleUrlChange(url) {
        this.setState({ url: url });
    }

    handleCreate() {
        // TODO: save the create data
        // UrlModel.find(1);
    }

    //
    render() {
        return (
            <Card title="Website Info">
                <WebsiteInfoInput
                    label="Name"
                    placeholder="Site name"
                    onChangeText={this.handleNameChange.bind(this)} />
                <WebsiteInfoInput
                    label="Url"
                    placeholder="http://site.name"
                    multiline={true}
                    numberOfLines={5}
                    onChangeText={this.handleUrlChange.bind(this)} />
                <SecondaryButton
                    title="Create"
                    onPress={this.handleCreate.bind(this)} />
            </Card>
        )
    }
}

export {
    UrlCreateScreen
};
