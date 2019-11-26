import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import Box from './components/Box';
import { Fonts } from './Fonts';

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View style={{ fontFamily: Fonts.NOTOSANSKR }}>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default App;
