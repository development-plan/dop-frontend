import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withNavigation } from 'react-navigation';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
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

    useEffect(() => {
        const config = {
            headers: {
                Authorization: JWT_TOKEN
            }
        };
        axios
            .get('http://kbsc.inudevs.com/post', config)
            .then((res) => {
                setPost(res.data.posts);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    {posts.map((x: PostPayload) => {
                        return <Box key={x.id} boxData={x} />;
                    })}
                </ScrollView>

                <FloatingButton onPress={() => props.navigation.navigate('Post')} />
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

export default withNavigation(Home);
