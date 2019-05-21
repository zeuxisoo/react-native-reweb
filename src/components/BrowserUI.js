import React from 'react';
import { View, StyleSheet } from 'react-native';

import { BrowserHeader } from './BrowserHeader';
import { BrowserFooter } from './BrowserFooter';
import { BrowserBody } from './BrowserBody';

class BrowserUI extends React.PureComponent {
    constructor(props) {
        super(props);

        this.browser = null,

        this.state = {
            isLoading: true,
            isBrowserAutoRefreshEnabled: false,
        };
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
                    isLoading={this.state.isLoading}
                    onRef={website => this.browser = website}
                    onLoadStart={() => this.handleOnLoadStart()}
                    onLoad={() => this.handleOnLoad()} />
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

export {
    BrowserUI
};
