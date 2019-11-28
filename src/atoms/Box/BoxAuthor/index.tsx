import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Fonts } from '../../../Fonts';

const AuthorStyle = styled.View`
    flex: 1;
    flex-direction: row;
    font-size: 10px;
`;

const ImageStyle = styled.Image`
    border-radius: 50;
    margin-right: 4px;
`;

interface BoxAuthorProps {
    readonly profile: string;
    readonly name: string;
}

const BoxAuthor = (props: BoxAuthorProps) => {
    const { profile, name } = props;

    return (
        <AuthorStyle>
            <ImageStyle source={{ uri: profile }} style={{ width: 20, height: 20 }} />
            <Text style={{ fontFamily: Fonts.NOTOSANSKR }}>{name}</Text>
        </AuthorStyle>
    );
};

export default BoxAuthor;
