import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
// @ts-ignore
import MasonryList from 'react-native-masonry-list';
import { Fonts } from '../Fonts';

const Search = () => {
    const data = [
        {
            uri: 'http://via.placeholder.com/150.png'
        },
        {
            uri: 'http://via.placeholder.com/150.png'
        },
        {
            uri: 'http://via.placeholder.com/150.png'
        }
    ];

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <MasonryList images={data} />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

Search.navigationOptions = {
    title: '검색',
    headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontSize: 24,
        fontFamily: Fonts.NOTOSANSKR
    }
};

export default Search;
