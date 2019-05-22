import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback,  TouchableOpacity, Platform } from 'react-native';

class TouchableButton extends React.PureComponent {

    static propTypes = {
        children: PropTypes.element
    }

    render() {
        if (Platform.OS === "android") {
            return (
                <TouchableNativeFeedback delayPressIn={0} {...this.props}>
                    {this.props.children}
                </TouchableNativeFeedback>
            );
        }else{
            return (
                <TouchableOpacity {...this.props}>
                    {this.props.children}
                </TouchableOpacity>
            );
        }
    }

}

export {
    TouchableButton
};
