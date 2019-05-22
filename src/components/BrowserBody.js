import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { BrowserBodySpinner } from './BrowserBodySpinner';

class BrowserBody extends React.PureComponent {

    static propTypes = {
        isLoading: PropTypes.bool,
        website: PropTypes.object,

        onRef: PropTypes.func,
        onLoadStart: PropTypes.func,
        onLoad: PropTypes.func,
    }

    static defaultProps = {
        isLoading: true,
        website  : {
            url: "",
        },

        onRef      : () => console.log('Please attach onRef method'),
        onLoadStart: () => console.log('Please attach onLoadStart method'),
        onLoad     : () => console.log('Please attach onLoad method'),
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
