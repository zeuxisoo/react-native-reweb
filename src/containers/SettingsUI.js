import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, InteractionManager } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import { connect } from 'react-redux';

import { colors } from '../config';
import { fetchSettings, setRefreshDelaySeconds, switchUserAgent } from '../redux/actions/settings';

class SettingsUIContainer extends React.Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);

        this.refreshDelaySeconds = ['Cancel', '0', '1', '2', '3', '5', '8', '10'];

        this.state = {
            value: 1,
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchSettings();
        });
    }

    handleRefreshDelaySeconds() {
        this.actionSheet.show();
    }

    handleSetRefreshDelaySeconds(index) {
        // If the index is not cancel, set it
        if (index !== 0) {
            this.props.setRefreshDelaySeconds(this.refreshDelaySeconds[index]);
        }
    }

    handleMangeUserAgentPress() {
        this.props.navigation.navigate('UserAgentIndexScreen');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.sectionHeader}>Browser</Text>
                <ListItem
                    title="Refresh Delay Seconds"
                    badge={{
                        value: this.props.refreshDelaySeconds,
                        badgeStyle: styles.numberBadgeBackgroundStyle,
                        textStyle: styles.numberBadgeTextStyle,
                    }}
                    onPress={this.handleRefreshDelaySeconds.bind(this)} />
                <ActionSheet
                    ref={o => this.actionSheet = o}
                    title={'Refresh delay seconds'}
                    options={this.refreshDelaySeconds}
                    cancelButtonIndex={0}
                    destructiveButtonIndex={0}
                    onPress={this.handleSetRefreshDelaySeconds.bind(this)} />

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
    },
    numberBadgeBackgroundStyle: {
        backgroundColor: 'white',
    },
    numberBadgeTextStyle: {
        color: colors.secondary,
        fontSize: 14,
    }
});

const mapStateToProps = state => ({
    refreshDelaySeconds: state.settings.refreshDelaySeconds,
    userAgent          : state.settings.userAgent,
});

const mapDispatchToProps = dispatch => ({
    setRefreshDelaySeconds: (seconds) => dispatch(setRefreshDelaySeconds(seconds)),
    switchUserAgent       : (isOn) => dispatch(switchUserAgent(isOn)),
    fetchSettings         : () => dispatch(fetchSettings()),
});

const SettingsUI = connect(mapStateToProps, mapDispatchToProps)(SettingsUIContainer);

export {
    SettingsUI
};
