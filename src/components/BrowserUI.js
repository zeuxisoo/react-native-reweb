import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';


import { colors } from '../config';
import { BrowserHeader } from './BrowserHeader';
import { BrowserFooter } from './BrowserFooter';

class BrowserUI extends React.PureComponent {
    constructor(props) {
        super(props);

        this.browser = null,

        this.state = {
            isLoading: true,
            isBrowserAutoRefreshEnabled: false,
        };
    }

    // Disable the default loading view
    handleRenderLoading() {
        return (
            <View></View>
        )
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
                <View style={styles.webViewContainer}>
                    <WebView
                        ref={webview => {this.browser = webview;}}
                        style={styles.browserContainer}
                        source={{uri: website.url}}
                        domStorageEnabled={true}
                        javaScriptEnabled={true}
                        renderLoading={this.handleRenderLoading}
                        onLoadStart={() => this.handleOnLoadStart()}
                        onLoad={() => this.handleOnLoad()} />
                    {
                        this.state.isLoading === true
                        ?
                            <View style={styles.loadingViewContainer}>
                                <ActivityIndicator color={colors.primary} size="large" />
                            </View>
                        :
                            null
                    }
                </View>
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
    webViewContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    browserContainer: {
    },
    loadingViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        position: 'absolute',
    },
});

export {
    BrowserUI
};
