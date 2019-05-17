import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';

import { colors } from '../config';

// not exports
const HeaderMaterialButton = props => (
    <HeaderButton IconComponent={MaterialIcons} iconSize={23} color={colors.tertiary} {...props} />
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

const HeaderMaterialItem = Item;

//
export {
    HeaderMaterialButtons,
    HeaderMaterialItem,
};
