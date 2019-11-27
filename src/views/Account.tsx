import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import { Fonts } from '../Fonts';

const Account = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text>계정</Text>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

Account.navigationOptions = {
    title: '계정',
    headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontSize: 24,
        fontFamily: Fonts.NOTOSANSKR
    }
};

export default Account;
