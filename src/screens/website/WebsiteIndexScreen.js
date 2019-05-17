import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

import { HeaderTitle } from '../../components';

class WebsiteIndexScreen extends React.Component {
    static navigationOptions = ({ navigation }) =>({
        headerTitle: <HeaderTitle website={navigation.getParam('website', {})} />,
    });

    renderLoadingView() {
        return (
            <ActivityIndicator color="#0088FF" size="large" style={styles.loadingView} />
        )
    }

    render() {
        const { navigation } = this.props;
        const website = navigation.getParam('website');

        return (
            <View style={styles.container}>
                <WebView
                    style={styles.webview}
                    source={{uri: website.url}}
                    renderLoading={this.renderLoadingView}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    webview: {
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    loadingView: {
        flex: 1,
        justifyContent: 'center',
    }
});

export {
    WebsiteIndexScreen
};
