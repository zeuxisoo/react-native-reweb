import React from 'react';
import { Button } from 'react-native-elements';

import { vogues } from '../config';

class SecondaryButton extends React.PureComponent {

    render() {
        const { buttonStyle , ...restProps } = this.props;

        return (
            <Button buttonStyle={[vogues.secondaryButton, buttonStyle]} {...restProps} />
        );
    }

}

export {
    SecondaryButton
};
