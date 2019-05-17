import React from 'react';

import { HeaderMaterialButtons, HeaderMaterialItem } from './HeaderMaterialButton';
import { colors } from '../config';

class HeaderTextButton extends React.PureComponent {

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
