import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';

import { fetchWebsites } from '../../redux/actions/website';
import { HeaderMaterialButtons, HeaderMaterialItem } from '../../components/header';
import { CenterView } from '../../components/view';

class HomeComponent extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Home",
            headerRight: (
                <HeaderMaterialButtons>
                    <HeaderMaterialItem title="add" iconName="add" onPress={() => navigation.navigate('WebsiteCreateScreen')} />
                </HeaderMaterialButtons>
            )
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        }
    }

    componentDidMount() {
        this.fetchWebsites();
    }

    fetchWebsites() {
        this.setState({ loading: true });

        this.props.fetchWebsites();

        this.setState({ loading: false });
    }

    renderItem(item) {
        return (
            <Card>
                <Text>{item.name}</Text>
                <Text>{item.url}</Text>
            </Card>
        )
    }

    render() {
        if (this.state.loading === true) {
            return <CenterView text="Loading..." />
        }

        return (
            <View>
                <FlatList
                    data={this.props.websites}
                    keyExtractor={(item, index) => `website-${item.id}`}
                    renderItem={({ item }) => this.renderItem(item)}
                    refreshing={this.state.loading} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    websites: state.website.all
});

const mapDispatchToProps = dispatch => ({
    fetchWebsites: () => dispatch(fetchWebsites())
});

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export {
    HomeScreen
};
