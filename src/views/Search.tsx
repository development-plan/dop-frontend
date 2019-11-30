import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import axios from 'axios';
import styled from 'styled-components/native';
import { Fonts } from '../Fonts';
import SearchBar from '../components/SearchBar';
import PostPayload from '../structures/PostPayload';
import Box from '../components/Box';
import JWT_TOKEN from '../api';

const LoadingText = styled.Text`
    margin-top: 16px;
    align-self: center;
    font-size: 24px;
    font-weight: bold;
`;

const Search = () => {
    const searchTextState = useState<string>('');
    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmitEditing = () => {
        setLoading(true);
        setPost([]);

        const config = {
            headers: {
                Authorization: JWT_TOKEN
            }
        };
        axios
            .get(`http://kbsc.inudevs.com/search/${searchTextState[0]}`, config)
            .then((res) => {
                res.data.result.forEach((i) => {
                    axios.get(`http://kbsc.inudevs.com/post/${i.id}`, config).then((res) => {
                        setPost((post) => [...post, res.data.post]);
                        setLoading(false);
                    });
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView>
                <SearchBar searchTextState={searchTextState} onSubmitEditing={onSubmitEditing} />
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    {loading ? <LoadingText>로딩중</LoadingText> : <></>}
                    {posts.map((x: PostPayload) => {
                        return <Box key={x.id} boxData={x} />;
                    })}
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

Search.navigationOptions = {
    title: '검색',
    headerTitleStyle: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: Fonts.NOTOSANSKR,
        marginLeft: 20
    }
};

export default Search;
