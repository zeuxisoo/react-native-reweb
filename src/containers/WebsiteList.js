import React from 'react';
import { View, FlatList, InteractionManager } from 'react-native';
import { connect } from 'react-redux';

import { CenterView, WebsiteListItem } from '../components';
import { fetchWebsites } from '../redux/actions/website';

class WebsiteListContainer extends React.Component {

    componentDidMount() {
        this.willFocusListener = this.props.navigation.addListener("willFocus", () => {
            InteractionManager.runAfterInteractions(() => {
                this.props.fetchWebsites()
            });
        });
    }

    componentWillUnmount() {
        this.willFocusListener.remove();
    }

    renderItem(item) {
        return <WebsiteListItem website={item} onItemPress={this.props.onItemPress} />
    }

    render() {
        if (this.props.isLoading === true) {
            return <CenterView text="Loading..." />
        }

        return (
            <View>
                <FlatList
                    data={this.props.websites}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item, index }) => this.renderItem(item)}
                    bounces={false} />
            </View>
        );
    }

}

const mapStateToProps = state => ({
    isLoading: state.allWebsite.isLoading,
    websites : state.allWebsite.websites,
});

const mapDispatchToProps = dispatch => ({
    fetchWebsites: () => dispatch(fetchWebsites()),
});

const WebsiteList = connect(mapStateToProps, mapDispatchToProps)(WebsiteListContainer);

export {
    WebsiteList
};
