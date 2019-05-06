import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

import { colors } from '../../config';

const MaterialHeaderButton = props => (
    <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={23} color={colors.tertiary} />
);

const MaterialHeaderButtons = props => {
    return (
        <HeaderButtons
            HeaderButtonComponent={MaterialHeaderButton}
            OverflowIcon={<MaterialIcons name="more-vert" size={23} color="white" />}
            {...props}
        />
    );
};

const Item = HeaderButtons.Item;

export {
    MaterialHeaderButtons,
    Item,
};
