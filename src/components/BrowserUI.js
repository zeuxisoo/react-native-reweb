import React from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { Button as ElementButton } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../config';

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
                <SafeAreaView style={styles.safeContainer}>
                    <View style={styles.headerContainer}>
                        <View style={styles.doneButtonContainer}>
                            <Button title="Done" color={colors.darkPrimary} onPress={() => navigation.goBack()} />
                        </View>
                        <View style={styles.addressBarContainer}>
                            <Text style={styles.websiteName}>{website.name}</Text>
                            <Text style={styles.websiteUrl}>{website.url}</Text>
                        </View>
                    </View>
                </SafeAreaView>
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
                <SafeAreaView style={styles.safeContainer}>
                    <View style={styles.footerContainer}>
                        <ElementButton
                            icon={
                                <Icon
                                    name="arrow-back"
                                    size={15}
                                    color={colors.secondary} />
                            }
                            containerStyle={styles.footerButtonContainer}
                            buttonStyle={styles.footerButtonStyle}
                            onPress={() => this.browser.goBack()} />
                        <ElementButton
                            icon={
                                <Icon
                                    name="arrow-forward"
                                    size={15}
                                    color={colors.secondary} />
                            }
                            containerStyle={styles.footerButtonContainer}
                            buttonStyle={styles.footerButtonStyle}
                            onPress={() => this.browser.goForward()} />
                        {
                            this.state.isBrowserAutoRefreshEnabled === true
                            ?
                                <ElementButton
                                    icon={
                                        <Icon
                                            name="stop"
                                            size={15}
                                            color={colors.lightTertiary} />
                                    }
                                    containerStyle={styles.footerButtonContainer}
                                    buttonStyle={styles.footerButtonStyle}
                                    onPress={() => this.disableBrowserAutoRefresh()} />
                            :
                                <ElementButton
                                    icon={
                                        <Icon
                                            name="refresh"
                                            size={15}
                                            color={colors.secondary} />
                                    }
                                    containerStyle={styles.footerButtonContainer}
                                    buttonStyle={styles.footerButtonStyle}
                                    onPress={() => this.enableBrowserAutoRefresh()} />
                        }
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeContainer: {
        backgroundColor: colors.primary,
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
    },
    doneButtonContainer: {
        alignItems: 'center',
    },
    addressBarContainer: {
        flexDirection: 'column',
        paddingLeft: 10,
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
    footerContainer: {
        flexDirection: 'row',
    },
    footerButtonContainer: {
        flex: 1,
    },

    websiteName: {
        color: colors.secondary,
        fontWeight: 'bold',
        paddingBottom: 3,
    },
    websiteUrl: {
        color: colors.tertiary,
        fontSize: 13,
    },

    footerButtonStyle: {
        backgroundColor:colors.primary
    },
});

export {
    BrowserUI
};
