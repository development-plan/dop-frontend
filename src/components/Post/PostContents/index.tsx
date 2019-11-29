import React, { Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const TitleInputStyle = styled.TextInput`
    background-color: white;
    margin-bottom: 16px;
    padding-left: 16px;
    font-size: 16px;
`;

const ContentsInputStyle = styled.TextInput`
    background-color: white;
    padding-left: 16px;
`;

interface PostContentsProps {
    readonly titleState: [string, Dispatch<SetStateAction<string>>];
    readonly contentsState: [string, Dispatch<SetStateAction<string>>];
}

const PostContents = (props: PostContentsProps) => {
    const { titleState, contentsState } = props;
    const [title, setTitle] = titleState;
    const [contents, setContents] = contentsState;

    const onTitleInputChange = (t: string) => setTitle(t);
    const onContentsInputChange = (t: string) => setContents(t);

    return (
        <>
            <View style={{ backgroundColor: '#e0e0e0' }}>
                <TitleInputStyle placeholder="제목을 입력하세요." onChangeText={onTitleInputChange} value={title} />
            </View>
            <ContentsInputStyle multiline placeholder="프로젝트에 대한 설명이나 유사 서비스 등을 입력해주세요." onChangeText={onContentsInputChange} value={contents} />
        </>
    );
};

export default PostContents;
