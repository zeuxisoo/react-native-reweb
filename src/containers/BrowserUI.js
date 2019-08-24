import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { BrowserHeader, BrowserBody, BrowserFooter } from '../components';
import { fetchSettings } from '../redux/actions/settings';
import { fetchUserAgents } from '../redux/actions/user-agent';

class BrowserUIContainer extends React.Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);

        this.browser = null,

        this.state = {
            isLoading: true,
            isBrowserAutoRefreshEnabled: false,
            userAgent: "",
        };

        this.props.fetchSettings();
        this.props.fetchUserAgents().then(() => this.setUserAgent());
    }

    // Show the custom loading when page load start
    handleOnLoadStart() {
        this.setState({
            isLoading: true,
        });
    }

    // Hide the custom loading when page loaded
    handleOnLoad() {
        this.setState({
            isLoading: false,
        });

        if (this.state.isBrowserAutoRefreshEnabled === true) {
            this.browser.reload();
        }
    }

    // Write the navigation state to console
    handleOnNavigationStateChange(navState) {
        console.log(navState);
    }

    //
    enableBrowserAutoRefresh() {
        this.setState({
            isBrowserAutoRefreshEnabled: true,
        });

        this.browser.reload();
    }

    disableBrowserAutoRefresh() {
        this.setState({
            isBrowserAutoRefreshEnabled: false,
        });
    }

    setUserAgent() {
        let userAgent = "";

        if (this.props.settings.userAgent === true) {
            userAgent = _.sample(this.props.userAgents).content
        }

        this.setState({
            userAgent: userAgent
        });
    }

    render() {
        const { navigation } = this.props;
        const website = navigation.getParam('website', {
            name: "",
            url : "",
        });

        return (
            <View style={styles.container}>
                <BrowserHeader
                    website={website}
                    onDonePress={() => navigation.goBack()} />
                <BrowserBody
                    website={website}
                    userAgent={this.state.userAgent}
                    isLoading={this.state.isLoading}
                    onRef={website => this.browser = website}
                    onLoadStart={() => this.handleOnLoadStart()}
                    onLoad={() => this.handleOnLoad()}
                    onNavigationStateChange={navState => this.handleOnNavigationStateChange(navState)} />
                <BrowserFooter
                    isBrowserAutoRefreshEnabled={this.state.isBrowserAutoRefreshEnabled}
                    onBackPress={() => this.browser.goBack()}
                    onForwardPress={() => this.browser.goForward()}
                    onRefreshStartPress={() => this.enableBrowserAutoRefresh()}
                    onRefreshStopPress={() => this.disableBrowserAutoRefresh()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = state => ({
    settings  : state.settings,
    userAgents: state.userAgent.userAgents,
});

const mapDispatchToProps = dispath => ({
    fetchSettings: () => dispath(fetchSettings()),
    fetchUserAgents: () => dispath(fetchUserAgents()),
});

const BrowserUI = connect(mapStateToProps, mapDispatchToProps)(BrowserUIContainer);

export {
    BrowserUI
};
