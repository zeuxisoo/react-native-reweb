import React from 'react';
import { View, FlatList, InteractionManager } from 'react-native';
import { connect } from 'react-redux';

import { CenterTextBlock, WebsiteListItem, WebsiteListItemSeparator } from '../components';
import { fetchWebsites } from '../redux/actions/website';

class WebsiteListContainer extends React.Component {

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchWebsites()
        });
    }

    componentWillUnmount() {
    }

    renderItem(item) {
        return <WebsiteListItem website={item} onItemPress={this.props.onItemPress} />
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
                    renderItem={({ item, index }) => this.renderItem(item)}
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
