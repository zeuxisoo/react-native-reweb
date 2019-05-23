import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SwipeOutButton extends React.PureComponent {

    static propTypes = {
        iconName: PropTypes.string,
        iconColor: PropTypes.string,
        iconSize: PropTypes.number,
    }

    static defaultProps = {
        iconName : "",
        iconColor: null,
        iconSize : 20,
    }

    render() {
        return (
            <View style={styles.container}>
               <Icon
                    name={this.props.iconName}
                    size={this.props.iconSize}
                    color={this.props.iconColor ? this.props.iconColor : colors.secondary} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export {
    SwipeOutButton
};
