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

    const exampleData2: BoxData = {
        profile: 'http://via.placeholder.com/150.png',
        name: '한글',
        commentCount: 0,
        title: '인공지능 비서를 만들고 싶어요',
        contents: '클로바, 시리 같은 인공지능 비서를 만들고 싶어요. 파이썬에 대한 기본적인 문법은 어느정도 알고 있지만, 인공지능은 건들지 못하겠습니다.. asdkasdjk',
        tags: ['인공지능', '파이썬'],
        images: ['http://via.placeholder.com/150.png']
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Box boxData={exampleData} />
                    <Box boxData={exampleData2} />
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
