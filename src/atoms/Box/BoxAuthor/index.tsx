import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Fonts } from '../../../Fonts';

const AuthorStyle = styled.View`
    flex: 1;
    font-size: 10px;
`;

interface BoxAuthorProps {
    readonly profile: string;
    readonly name: string;
}

const BoxAuthor = (props: BoxAuthorProps) => {
    return (
        <AuthorStyle>
            <Text style={{ fontFamily: Fonts.NOTOSANSKR }}>
                {props.profile} {props.name}
            </Text>
        </AuthorStyle>
    );
};

export default BoxAuthor;