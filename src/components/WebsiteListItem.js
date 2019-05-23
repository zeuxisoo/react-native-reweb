import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { View, ListItem } from 'react-native-elements';
import SwipeOut from 'react-native-swipeout';

import { colors } from '../config';
import { TouchableButton } from './TouchableButton';
import { SwipeOutButton } from './SwipeOutButton';

class WebsiteListItem extends React.PureComponent {

    static propTypes = {
        website: PropTypes.object,
        onItemPress: PropTypes.func,
    }

    static defaultProps = {
        website: {
            name: "",
            url : "",
        },

        onItemPress: () => console.log('Please attach onItemPress method'),
    }

    render() {
        const rightButtons = [
            {
                component: <SwipeOutButton iconName="delete" iconColor="white" iconSize={20} buttonStyle={styles.deleteButton} />,
                backgroundColor: colors.backgroundDelete,
                onPress: () => alert("TODO") // TODO
            }
        ];

        return (
            <TouchableButton>
                <SwipeOut
                    autoClose={true}
                    right={rightButtons}
                    backgroundColor="white">
                    <ListItem
                        title={this.props.website.name}
                        titleStyle={styles.titleStyle}
                        subtitle={this.props.website.url}
                        subtitleStyle={styles.subtitleStyle}
                        onPress={() => this.props.onItemPress(this.props.website)} />
                </SwipeOut>
            </TouchableButton>
        )
    }

}

const styles = StyleSheet.create({
    titleStyle: {
        color: colors.primary,
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    subtitleStyle: {
        color: colors.secondary,
        fontSize: 13,
    },
    deleteButton: {
        backgroundColor: colors.backgroundDelete,
    }
});

export {
    WebsiteListItem
};
