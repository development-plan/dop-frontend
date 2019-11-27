import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import { Fonts } from '../Fonts';

const Search = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text>검색</Text>
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
