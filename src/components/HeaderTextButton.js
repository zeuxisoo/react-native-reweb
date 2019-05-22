import React from 'react';
import PropTypes from 'prop-types';
import { HeaderMaterialButtons, HeaderMaterialItem } from './HeaderMaterialButton';
import { colors } from '../config';

class HeaderTextButton extends React.PureComponent {

    static propTypes = {
        text: PropTypes.string,
        onPress: PropTypes.func,
    }

    static defaultProps = {
        text: "",
    }

    render() {
        return (
            <HeaderMaterialButtons>
                <HeaderMaterialItem
                    color={colors.darkPrimary}
                    title={this.props.text}
                    onPress={this.props.onPress} />
            </HeaderMaterialButtons>
        );
    }

}

export {
    HeaderTextButton
};
