import React from 'react';
import { View, FlatList, InteractionManager } from 'react-native';
import { connect } from 'react-redux';

import { CenterTextBlock, WebsiteListItemSeparator } from '../components';
import { WebsiteListItem } from './WebsiteListItem';
import { fetchWebsites } from '../redux/actions/website';

class WebsiteListContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentSwipeOutRowId: -1
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchWebsites()
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
        return <WebsiteListItem
                    index={index}
                    website={item}
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
                    data={this.props.websites}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item, index }) => this.renderItem(item, index)}
                    extraData={this.state.currentSwipeOutRowId}
                    ItemSeparatorComponent={() => <WebsiteListItemSeparator />}
                    bounces={false} />
            </View>
        );
    }

}

const mapStateToProps = state => ({
    isLoading: state.website.isLoading,
    websites : state.website.websites,
});

const mapDispatchToProps = dispatch => ({
    fetchWebsites: () => dispatch(fetchWebsites()),
});

const WebsiteList = connect(mapStateToProps, mapDispatchToProps)(WebsiteListContainer);

export {
    WebsiteList
};
