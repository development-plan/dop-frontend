import React from 'react';
import { View } from 'react-native';
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
    margin-bottom: 10px;
`;

const ImageWrapperStyle = styled.View`
    flex-direction: row;
`;

const ImageStyle = styled.Image`
    margin: 0 10px 10px 0;
`;

interface BoxContentsProps {
    readonly title: string;
    readonly images: string[];
    readonly children: string;
}

const BoxContents = (props: BoxContentsProps) => {
    const { title, images, children } = props;

    return (
        <View>
            <TitleStyle style={{ fontFamily: Fonts.NOTOSANSKR }}>{title}</TitleStyle>
            <DescriptionStyle style={{ fontFamily: Fonts.NOTOSANSKR }}>{children}</DescriptionStyle>
            <ImageWrapperStyle>
                {images.map((x, index) => {
                    return <ImageStyle key={index} source={{ uri: x }} style={{ width: 100, height: 100 }} />;
                })}
            </ImageWrapperStyle>
        </View>
    );
};

export default BoxContents;
