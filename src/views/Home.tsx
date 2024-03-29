import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavigationEvents, withNavigation } from 'react-navigation';
import { Alert, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Box from '../components/Box';
import { Fonts } from '../Fonts';
import PostPayload from '../structures/PostPayload';
import FloatingButton from '../atoms/FloatingButton';
import JWT_TOKEN from '../api';

interface HomeProps {
    readonly navigation: any;
}

const Home = (props: HomeProps) => {
    const [posts, setPost] = useState([]);

    const refreshPost = () => {
        const config = {
            headers: {
                Authorization: JWT_TOKEN
            }
        };
        axios
            .get('http://kbsc.inudevs.com/post', config)
            .then((res) => {
                setPost([]);
                setPost(res.data.posts);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        NetInfo.fetch().then((state) => {
            console.log(state.isConnected);
            if (!state.isConnected) Alert.alert('인터넷 연결에 실패하였습니다.', '서비스 사용을 위해서는 인터넷 연결이 필요합니다.');
        });

        refreshPost();
    }, []);

    return (
        <>
            <NavigationEvents onDidFocus={() => refreshPost()} />
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    {posts.map((x: PostPayload) => {
                        return <Box key={x.id} boxData={x} />;
                    })}
                </ScrollView>
            </SafeAreaView>
            <FloatingButton onPress={() => props.navigation.navigate('Post')} />
        </>
    );
};

Home.navigationOptions = {
    title: 'DOP',
    headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontSize: 24,
        fontFamily: Fonts.NOTOSANSKR
    }
};

export default withNavigation(Home);
