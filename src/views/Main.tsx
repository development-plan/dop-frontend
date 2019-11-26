import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Box from '../components/Box';

const Main = () => {
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

Main.navigationOptions = {
    title: 'logo',
    headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontSize: 24
    }
};

export default Main;
