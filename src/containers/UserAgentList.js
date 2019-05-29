import React from 'react';
import { View, FlatList, InteractionManager } from 'react-native';
import { connect } from 'react-redux';

import { CenterTextBlock, ListItemSeparator } from '../components';
import { UserAgentListItem } from './UserAgentListItem';
import { fetchUserAgents } from '../redux/actions/user-agent';

class UserAgentListContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentSwipeOutRowId: -1
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchUserAgents()
        });
    }

    componentWillUnmount() {
    }

    handleSwipeOutOpen(rowId) {
        this.setState({
            currentSwipeOutRowId: rowId,
        });
    }

    renderItem(item, index) {
        return <UserAgentListItem
                    index={index}
                    userAgent={item}
                    currentSwipeOutRowId={this.state.currentSwipeOutRowId}
                    onItemPress={this.props.onItemPress}
                    onSwipeOutOpen={this.handleSwipeOutOpen.bind(this)} />
    }

    render() {
        if (this.props.isLoading === true) {
            return <CenterTextBlock text="Loading..." />
        }

        return (
            <View>
                <FlatList
                    data={this.props.UserAgents}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item, index }) => this.renderItem(item, index)}
                    extraData={this.state.currentSwipeOutRowId}
                    ItemSeparatorComponent={() => <ListItemSeparator />}
                    bounces={false} />
            </View>
        );
    }

}

const mapStateToProps = state => ({
    isLoading : state.userAgent.isLoading,
    UserAgents: state.userAgent.userAgents,
});

const mapDispatchToProps = dispatch => ({
    fetchUserAgents: () => dispatch(fetchUserAgents()),
});

const UserAgentList = connect(mapStateToProps, mapDispatchToProps)(UserAgentListContainer);

export {
    UserAgentList
};
