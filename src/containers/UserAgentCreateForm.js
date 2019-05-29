import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';
import { isEmpty } from 'validator';

import { alertError, alertSuccess, alertSystem } from '../helpers/alert';
import { createUserAgent } from '../redux/actions/user-agent';
import { FormInput, SecondaryButton } from '../components';

class UserAgentCreateFormContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            content: "",
        };
    }

    handleContentChange(content) {
        this.setState({ content: content });
    }

    handleCreate() {
        if (isEmpty(this.state.content) === true) {
            alertError("Please enter user agent content");
        }else{
            try {
                this.props.createUserAgent({
                    content: this.state.content,
                });

                this.setState({
                    content: "",
                });

                alertSuccess("User agent Created");
            }catch(e) {
                alertSystem(e.message);
            }
        }
    }

    render() {
        return (
            <Card title="User Agent">
                <FormInput
                    label="Content"
                    placeholder="User agent content"
                    multiline={true}
                    numberOfLines={5}
                    autoCapitalize="none"
                    onChangeText={this.handleContentChange.bind(this)}
                    value={this.state.content} />
                <SecondaryButton
                    title={(this.props.isLoading === true) ? "Creating" : "Create"}
                    onPress={this.handleCreate.bind(this)} />
            </Card>
        )
    }

}

const mapStateToProps = state => ({
    isLoading: state.userAgent.isLoading,
});

const mapDispatchToProps = dispatch => ({
    createUserAgent: (userAgent) => dispatch(createUserAgent(userAgent)),
});

const UserAgentCreateForm = connect(mapStateToProps, mapDispatchToProps)(UserAgentCreateFormContainer);

export {
    UserAgentCreateForm
};
