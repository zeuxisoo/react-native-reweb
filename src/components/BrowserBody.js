import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

import { colors } from '../config';

class BrowserBody extends React.PureComponent {

    // Disable the default loading view
    handleRenderLoading() {
        return (
            <View></View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    style={styles.browserContainer}
                    renderLoading={this.handleRenderLoading}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    ref={webview => this.props.onRef(webview)}
                    source={{uri: this.props.website.url}}
                    onLoadStart={this.props.onLoadStart}
                    onLoad={this.props.onLoad} />
                {
                    this.props.isLoading === true
                    ?
                        <View style={styles.loadingViewContainer}>
                            <ActivityIndicator color={colors.primary} size="large" />
                        </View>
                    :
                        null
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
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
    BrowserBody
};
