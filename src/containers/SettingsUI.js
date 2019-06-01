import React from 'react';
import { View, StyleSheet, InteractionManager } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import { fetchSettings, switchUserAgent } from '../redux/actions/settings';

class SettingsUIContainer extends React.Component {

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchSettings();
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ListItem
                    title="Enable User Agent"
                    switch={{
                        value: this.props.userAgent,
                        onValueChange: value => this.props.switchUserAgent(value)
                    }} />
                <ListItem
                    title="Manage user agents"
                    chevron={true}
                    topDivider={true} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey'
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
