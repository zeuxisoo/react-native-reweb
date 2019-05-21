import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { BrowserBodySpinner } from './BrowserBodySpinner';

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
                <BrowserBodySpinner isLoading={this.props.isLoading} />
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
});

export {
    BrowserBody
};
