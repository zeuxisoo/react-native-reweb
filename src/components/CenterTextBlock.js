import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

class CenterTextBlock extends React.PureComponent {

    static propTypes = {
        text: PropTypes.text,
    }

    static defaultProps = {
        text: "What?",
    }

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
    CenterTextBlock
};
