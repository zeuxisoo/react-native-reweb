import React from 'react';
import { DrawerItems } from 'react-navigation';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { colors } from '../config';


export default class AppDrawerMenu extends React.PureComponent {

    render() {
        const { items, ...restProps } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>ReWeb</Text>
                </View>
                <ScrollView>
                    <DrawerItems items={items} itemsContainerStyle={styles.menuItem} {...restProps} />
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        height: 90,
        backgroundColor: colors.primary,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    menuItem: {
        paddingTop: 0,
    }
});
