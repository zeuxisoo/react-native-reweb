import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { isEmpty } from 'validator';
import Faker from 'faker';

import { colors } from '../config';
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

    handleRandom() {
        this.setState({ content: Faker.internet.userAgent() });
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
                <View style={styles.buttonsContainer}>
                    <SecondaryButton
                        title="Get Random"
                        onPress={this.handleRandom.bind(this)}
                        containerStyle={[styles.buttonContainer, styles.randomButtonContainer]}
                        buttonStyle={styles.randomButton} />
                    <SecondaryButton
                        title={(this.props.isLoading === true) ? "Creating" : "Create"}
                        onPress={this.handleCreate.bind(this)}
                        containerStyle={[styles.buttonContainer, styles.createButtonContainer]} />
                </View>
            </Card>
        )
    }

}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    },
    randomButtonContainer: {
        paddingRight: 5,
    },
    createButtonContainer: {
        paddingLeft: 5,
    },

    randomButton: {
        backgroundColor: colors.darkPrimary
    },
});

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
