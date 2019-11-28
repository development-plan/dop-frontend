import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import { Fonts } from '../Fonts';

const Notice = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text>알림</Text>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

Notice.navigationOptions = {
    title: '알림',
    headerTitleStyle: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: Fonts.NOTOSANSKR,
        marginLeft: 20
    }
};

export default Notice;
