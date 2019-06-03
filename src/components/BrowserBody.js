import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { BrowserBodySpinner } from './BrowserBodySpinner';

class BrowserBody extends React.PureComponent {

    static propTypes = {
        isLoading: PropTypes.bool,
        website: PropTypes.object.isRequired,
        userAgent: PropTypes.string,

        onRef: PropTypes.func.isRequired,
        onLoadStart: PropTypes.func.isRequired,
        onLoad: PropTypes.func.isRequired,
    }

    static defaultProps = {
        isLoading: true,
    }

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
                    useWebKit={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    ref={webview => this.props.onRef(webview)}
                    source={{uri: this.props.website.url}}
                    userAgent={this.props.userAgent}
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
