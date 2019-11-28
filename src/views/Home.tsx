import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Box from '../components/Box';
import { Fonts } from '../Fonts';
import BoxData from '../structures/BoxData';

const Home = () => {
    const exampleData: BoxData = {
        profile: 'http://via.placeholder.com/150.png',
        name: 'ABC',
        commentCount: 5,
        title: '제목',
        contents: '설명ㄴㅇㄹㄴ망롬나ㅣㅇ뢈ㄴ어로',
        tags: ['안드로이드', '앱개발'],
        images: ['http://via.placeholder.com/150.png', 'http://via.placeholder.com/150.png', 'http://via.placeholder.com/150.png']
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Box boxData={exampleData} />
                    <Box boxData={exampleData} />
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
