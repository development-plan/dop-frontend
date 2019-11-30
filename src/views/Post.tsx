import React, { useEffect, useState } from 'react';
import { withNavigation } from 'react-navigation';
import { Alert, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import { Fonts } from '../Fonts';
import CancelButton from '../atoms/Header/CancelButton';
import ConfirmButton from '../atoms/Header/ConfirmButton';
import PostContents from '../components/Post/PostContents';
import PostImageList from '../atoms/Post/PostImageList';
import PostMenuIconList from '../atoms/Post/PostMenuIconList';
import TagModal from '../components/Post/TagModal';
import JWT_TOKEN from '../api';

const WrapperStyle = styled.SafeAreaView`
    flex: 1;
`;

const InputScrollWrapperStyle = styled.ScrollView`
    flex: 3;
`;

const MenuWrapperStyle = styled.View`
    flex: 1;
    background-color: #212121;
`;

const Post = ({ navigation }: any) => {
    const titleState = useState<string>('');
    const contentsState = useState<string>('');
    const tagsState = useState<string[]>([]);
    const modalOpenState = useState<boolean>(false);
    const [title] = titleState;
    const [content] = contentsState;
    const [tags] = tagsState;

    const upload = () => {
        const body = {
            title,
            content,
            tags,
            images: []
        };

        const config = {
            headers: {
                Authorization: JWT_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        axios
            .post('http://kbsc.inudevs.com/post', body, config)
            .then(() => {
                navigation.goBack(null);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        navigation.setParams({ postUpload: upload });
    }, [navigation, upload]);

    const onCameraClick = () => {
        Alert.alert('이미지 추가');
    };

    const onHashTagClick = () => {
        modalOpenState[1](true);
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />

            <TagModal tagsState={tagsState} modalOpenState={modalOpenState} />

            <WrapperStyle>
                <InputScrollWrapperStyle contentInsetAdjustmentBehavior="automatic">
                    <PostContents titleState={titleState} contentsState={contentsState} />
                </InputScrollWrapperStyle>
                <MenuWrapperStyle>
                    <PostImageList images={[]} />
                    <PostMenuIconList onCameraClick={onCameraClick} onHashTagClick={onHashTagClick} />
                </MenuWrapperStyle>
            </WrapperStyle>
        </>
    );
};

Post.navigationOptions = ({ navigation }: any) => ({
    title: '글쓰기',
    headerTitleStyle: {
        fontSize: 22,
        fontFamily: Fonts.NOTOSANSKR,
        textAlign: 'center',
        flex: 1
    },
    headerLeft: () => <CancelButton onPress={() => navigation.goBack(null)} />,
    headerRight: () => <ConfirmButton onPress={() => navigation.getParam('postUpload')()} />
});

export default withNavigation(Post);
