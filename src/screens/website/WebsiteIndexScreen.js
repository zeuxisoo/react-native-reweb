import React from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { Button as ElementButton } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../../config';

class WebsiteIndexScreen extends React.Component {
    static navigationOptions = ({ navigation }) =>({
        header: null,
    });

    renderLoadingView() {
        return (
            <ActivityIndicator color="#0088FF" size="large" style={styles.loadingViewContainer} />
        )
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
                <WebView
                    ref={webview => {this.browser = webview;}}
                    style={styles.webViewContainer}
                    source={{uri: website.url}}
                    renderLoading={this.renderLoadingView}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true} />
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
                        <ElementButton
                            icon={
                                <Icon
                                    name="refresh"
                                    size={15}
                                    color={colors.secondary} />
                            }
                            containerStyle={styles.footerButtonContainer}
                            buttonStyle={styles.footerButtonStyle}
                            onPress={() => this.browser.reload()} />
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
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    loadingViewContainer: {
        flex: 1,
        justifyContent: 'center',
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
    WebsiteIndexScreen
};
