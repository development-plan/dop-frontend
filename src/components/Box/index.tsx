import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import BoxAuthor from '../../atoms/Box/BoxAuthor';
import BoxComment from '../../atoms/Box/BoxComment';
import BoxContents from '../../atoms/Box/BoxContents';
import BoxTag from '../../atoms/Box/BoxTag';

const BoxStyle = styled.View`
    margin: 10px 14px;
    border: #bdbdbd 1px solid;
    background-color: #ffffff;
    border-radius: 6px;
`;

const WrapperStyle = styled.View`
    margin: 8px;
`;

const TopWrapperStyle = styled.View`
    flex: 1;
    flex-direction: row;
`;

const TagWrapperStyle = styled.View`
    flex-direction: row;
`;

const Box = () => {
    return (
        <>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View style={{ backgroundColor: '#fafafa' }}>
                        <BoxStyle>
                            <WrapperStyle>
                                <TopWrapperStyle>
                                    <BoxAuthor profile="{0}" name="ABC" />
                                    <BoxComment comment="3" />
                                </TopWrapperStyle>

                                <BoxContents title="모바일 지도 앱을 만들어 보고 싶어요!">구글 지도 같은 앱 서비스를 만들고 싶은데.. 긴설명 긴설명 긴설명 긴설명 긴설명 긴설명</BoxContents>

                                <TagWrapperStyle>
                                    <BoxTag tag="안드로이드" />
                                    <BoxTag tag="앱개발" />
                                </TagWrapperStyle>
                            </WrapperStyle>
                        </BoxStyle>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default Box;
