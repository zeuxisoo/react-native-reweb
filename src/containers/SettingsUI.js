import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, InteractionManager } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { connect } from 'react-redux';

import { colors } from '../config';
import { fetchSettings, switchUserAgent } from '../redux/actions/settings';

class SettingsUIContainer extends React.Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchSettings();
        });
    }

    handleMangeUserAgentPress() {
        this.props.navigation.navigate('UserAgentIndexScreen');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.sectionHeader}>Custom User Agent</Text>
                <ListItem
                    title="Enable User Agent"
                    switch={{
                        value: this.props.userAgent,
                        onValueChange: value => this.props.switchUserAgent(value)
                    }} />
                <ListItem
                    title="Manage user agents"
                    chevron={true}
                    topDivider={true}
                    onPress={this.handleMangeUserAgentPress.bind(this)} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey'
    },
    sectionHeader: {
        fontSize: 16,
        color: colors.darkPrimary,
        backgroundColor: colors.lightTertiary,
        paddingLeft: 12,
        paddingTop: 5,
        paddingBottom: 5,
    }
});

const mapStateToProps = state => ({
    userAgent: state.settings.userAgent,
});

const mapDispatchToProps = dispatch => ({
    switchUserAgent: (isOn) => dispatch(switchUserAgent(isOn)),
    fetchSettings  : () => dispatch(fetchSettings()),
});

const SettingsUI = connect(mapStateToProps, mapDispatchToProps)(SettingsUIContainer);

export {
    SettingsUI
};
