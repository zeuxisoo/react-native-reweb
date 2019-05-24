import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import SwipeOut from 'react-native-swipeout';
import _ from 'lodash';

import { colors } from '../config';
import { TouchableButton, SwipeOutButton } from '../components';
import { deleteWebsite } from '../redux/actions/website';

class WebsiteListItemContainer extends React.PureComponent {

    static propTypes = {
        index  : PropTypes.number.isRequired,
        website: PropTypes.object.isRequired,

        onItemPress: PropTypes.func.isRequired,
        onSwipeOutOpen: PropTypes.func.isRequired,
    }

    handlePressDelete() {
        this.props.deleteWebsite(this.props.website);
    }

    handleSwipeOutOnOpen(rowId, direction) {
        if (_.isUndefined(direction) === false) {
            this.props.onSwipeOutOpen(rowId);
        }
    }

    handleSwipeOutOnClose(rowId, direction) {
        if (rowId === this.props.currentSwipeOutRowId && _.isUndefined(direction) === false) {
            this.props.onSwipeOutOpen(null);
        }
    }

    render() {
        const rightButtons = [
            {
                component: <SwipeOutButton iconName="delete" iconColor="white" iconSize={20} buttonStyle={styles.deleteButton} />,
                backgroundColor: colors.backgroundDelete,
                onPress: () => this.handlePressDelete()
            }
        ];

        return (
            <TouchableButton>
                <SwipeOut
                    sectionId={1}
                    rowID={this.props.index}
                    close={(this.props.currentSwipeOutRowId !== this.props.index)}
                    right={rightButtons}
                    autoClose={true}
                    backgroundColor="white"
                    onOpen = {(sectionId, rowId, direction) => this.handleSwipeOutOnOpen(rowId, direction)}
                    onClose= {(sectionId, rowId, direction) => this.handleSwipeOutOnClose(rowId, direction)}>
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

const mapStateToProps = state => ({
    isLoading: state.website.isLoading,
    websites : state.website.websites,
});

const mapDispatchToProps = dispatch => ({
    deleteWebsite: website => dispatch(deleteWebsite(website)),
});

const WebsiteListItem = connect(mapStateToProps, mapDispatchToProps)(WebsiteListItemContainer);


export {
    WebsiteListItem
};
