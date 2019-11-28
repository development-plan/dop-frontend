import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import Box from '../components/Box';
import { Fonts } from '../Fonts';
import BoxData from '../structures/BoxData';

const Home = () => {
    const exampleData: BoxData = {
        profile: '0',
        name: 'ABC',
        commentCount: 5,
        title: '제목',
        contents: '설명ㄴㅇㄹㄴ망롬나ㅣㅇ뢈ㄴ어로',
        tags: ['안드로이드', '앱개발']
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View style={{ backgroundColor: '#fafafa' }}>
                        <Box boxData={exampleData} />
                        <Box boxData={exampleData} />
                    </View>
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
