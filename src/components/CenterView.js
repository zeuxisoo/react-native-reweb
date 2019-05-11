import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CenterView extends React.PureComponent {

    render() {
        return (
            <View style={styles.centerBlock}>
                <Text>{this.props.text}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    centerBlock: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export {
    CenterView
};
