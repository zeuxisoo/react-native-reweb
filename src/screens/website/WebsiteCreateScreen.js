import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';
import { isEmpty } from 'validator';

import { WebsiteInfoInput, SecondaryButton } from '../../components';
import { alertError, alertSuccess, alertSystem } from '../../helper/alert';
import { addWebsite } from '../../redux/actions/website';

class WebsiteCreateComponent extends React.Component {
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
        if (isEmpty(this.state.name) === true) {
            alertError("Please enter name");
        }else if (isEmpty(this.state.url) === true) {
            alertError("Please enter url");
        }else{
            try {
                this.props.addWebsite({
                    name: this.state.name,
                    url : this.state.url,
                });

                this.setState({
                    name: "",
                    url : "",
                });

                alertSuccess("Website Created");
            }catch(e) {
                alertSystem(e.message);
            }
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    addWebsite: (website) => dispatch(addWebsite(website)),
});

const WebsiteCreateScreen = connect(mapStateToProps, mapDispatchToProps)(WebsiteCreateComponent);

export {
    WebsiteCreateScreen
};
