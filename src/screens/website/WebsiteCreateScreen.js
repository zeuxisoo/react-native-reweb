import React from 'react';
import { Card } from 'react-native-elements';

import { WebsiteInfoInput } from '../../components/input';
import { SecondaryButton } from '../../components/button';

import { WebsiteModel } from '../../db/models';

class WebsiteCreateScreen extends React.Component {
    static navigationOptions = {
        title: "Create Website"
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
        try {
            WebsiteModel.create({
                id  : WebsiteModel.id(),
                name: this.state.name,
                url : this.state.url,
            });

            this.setState({
                name: "",
                url : "",
            });

            alert("Url Created");
        }catch(e) {
            alert(e.message);
        }
    }

    //
    render() {
        return (
            <Card title="Website Info">
                <WebsiteInfoInput
                    label="Name"
                    placeholder="Site name"
                    autoCapitalize="none"
                    onChangeText={this.handleNameChange.bind(this)}
                    value={this.state.name} />
                <WebsiteInfoInput
                    label="Url"
                    placeholder="http://site.name"
                    multiline={true}
                    numberOfLines={5}
                    autoCapitalize="none"
                    onChangeText={this.handleUrlChange.bind(this)}
                    value={this.state.url} />
                <SecondaryButton
                    title="Create"
                    onPress={this.handleCreate.bind(this)} />
            </Card>
        )
    }
}

export {
    WebsiteCreateScreen
};
