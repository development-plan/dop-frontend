import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import styled from 'styled-components/native';
import { Fonts } from '../Fonts';

const ButtonStyle = styled.Button`
    border: none;
    background-color: white;
    color: black;
`;

const TitleInputStyle = styled.TextInput`
    background-color: white;
    margin-bottom: 16px;
    padding-left: 16px;
    font-size: 16px;
`;

const ContentsInputStyle = styled.TextInput`
    flex: 1;
    background-color: white;
    padding-left: 16px;
`;

interface PostProps {
    readonly navigation: any;
}

const Post = (props: PostProps) => {
    const [title, setTitle] = useState<string>('');
    const [contents, setContents] = useState<string>('');

    const onTitleInputChange = (t: string) => {
        setTitle(t);
    };

    const onContentsInputChange = (t: string) => {
        setContents(t);
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ backgroundColor: '#e0e0e0' }}>
                    <View>
                        <TitleInputStyle placeholder="제목을 입력하세요." onChangeText={onTitleInputChange} value={title} />
                        <ContentsInputStyle multiline placeholder="프로젝트에 대한 설명이나 유사 서비스 등을 입력해주세요." onChangeText={onContentsInputChange} value={contents}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

Post.navigationOptions = {
    title: '글쓰기',
    headerTitleStyle: {
        fontSize: 22,
        fontFamily: Fonts.NOTOSANSKR,
        textAlign: 'center',
        flex: 1
    },
    headerLeft: () => <ButtonStyle onPress={() => {}} title="취소" />,
    headerRight: () => <ButtonStyle onPress={() => {}} title="등록" />
};

export default withNavigation(Post);
