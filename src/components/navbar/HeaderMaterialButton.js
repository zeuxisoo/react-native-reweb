import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

import { colors } from '../../config';

// not exports
const HeaderMaterialButton = props => (
    <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={23} color={colors.tertiary} />
);

// exports
const HeaderMaterialButtons = props => {
    return (
        <HeaderButtons
            HeaderButtonComponent={HeaderMaterialButton}
            OverflowIcon={<MaterialIcons name="more-vert" size={23} color="white" />}
            {...props}
        />
    );
};

const HeaderMaterialItem = HeaderMaterialButtons.Item;

//
export {
    HeaderMaterialButtons,
    HeaderMaterialItem,
};
