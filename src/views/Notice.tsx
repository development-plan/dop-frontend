import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Fonts } from '../Fonts';
import NoticeBox from '../components/NoticeBox';
import NoticeData from '../structures/NoticeData';

const Notice = () => {
    const data: NoticeData = {
        profile: 'http://via.placeholder.com/150.png',
        title: '디자인시안 님이 답변을 등록했습니다.',
        contents: '웹 개발이 처음이시라면, 이 사이트들을 추천합니다!',
        time: 6
    };

    const data2: NoticeData = {
        profile: 'http://via.placeholder.com/150.png',
        title: '디자인시안 님이 답변을 추천했습니다.',
        contents: '생활코딩이라는 사이트에서 웹 강좌를 보실 수 있습니다.',
        time: 3
    };

    const data3: NoticeData = {
        profile: 'http://via.placeholder.com/150.png',
        title: '디자인시안 님이 답변을 등록했습니다.',
        contents: 'MDN 사이트에서 자료를 찾아보시는건 어떠세요?',
        time: 0
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <NoticeBox noticeData={data} />
                    <NoticeBox noticeData={data2} />
                    <NoticeBox noticeData={data3} />
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
