import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Fonts } from '../../../Fonts';

const TitleStyle = styled.Text`
    font-size: 18px;
    margin: 10px 0px;
    font-weight: bold;
`;

const DescriptionStyle = styled.Text`
    width: 80%;
    font-size: 14px;
    color: #757575;
`;

interface BoxContentsProps {
    readonly title: string;
    readonly children: string;
}

const BoxContents = (props: BoxContentsProps) => {
    return (
        <View>
            <TitleStyle style={{ fontFamily: Fonts.NOTOSANSKR }}>{props.title}</TitleStyle>
            <DescriptionStyle style={{ fontFamily: Fonts.NOTOSANSKR }}>{props.children}</DescriptionStyle>
            <View style={{ width: 150, height: 150 }}>
                <Text style={{ fontFamily: Fonts.NOTOSANSKR }}>(이미지)</Text>
            </View>
        </View>
    );
};

export default BoxContents;
