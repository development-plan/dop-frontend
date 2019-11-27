import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import Box from '../components/Box';
import { Fonts } from '../Fonts';

const Home = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

Home.navigationOptions = {
    title: 'logo',
    headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontSize: 24,
        fontFamily: Fonts.NOTOSANSKR
    }
};

export default Home;
