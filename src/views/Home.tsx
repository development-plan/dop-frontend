import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withNavigation } from 'react-navigation';
import { Button, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Box from '../components/Box';
import { Fonts } from '../Fonts';
import BoxPayload from '../structures/BoxPayload';

interface HomeProps {
    readonly navigation: any;
}

const Home = (props: HomeProps) => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVkZTIxYzM2MjlhNmM4MDI2ZGU4NTVlMCJ9.9x07XQ6hZTkT0-n5A2GBUUzIIb_Qm2l83FFce-MjgvU'
            }
        };
        axios
            .get('http://kbsc.inudevs.com/post', config)
            .then((res) => {
                setPost(res.data.posts);
                console.log(posts);
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
                    <Button
                        title="글등록"
                        onPress={() => {
                            props.navigation.navigate('Post');
                        }}
                    />

                    {posts.map((x: BoxPayload) => {
                        return <Box key={x.id} boxData={x} />;
                    })}
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

export default withNavigation(Home);
