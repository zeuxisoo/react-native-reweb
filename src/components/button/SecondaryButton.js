import React from 'react';
import { Button } from 'react-native-elements';

import { vogues } from '../../config';

const SecondaryButton = props => (
    <Button buttonStyle={vogues.secondaryButton} {...props} />
);

export {
    SecondaryButton
};
