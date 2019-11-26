import React from 'react';
import styled from 'styled-components/native';
import { Fonts } from '../../../Fonts';

const TagStyle = styled.View`
    border: #9e9e9e 1px solid;
    border-radius: 20px;
    padding: 2px 10px;
    margin-right: 4px;
`;

const TagTextStyle = styled.Text`
    color: #9e9e9e;
    font-size: 10px;
    font-weight: bold;
`;

interface BoxTagProps {
    readonly tag: string;
}

const BoxTag = (props: BoxTagProps) => {
    return (
        <TagStyle>
            <TagTextStyle style={{ fontFamily: Fonts.NOTOSANSKR }}># {props.tag}</TagTextStyle>
        </TagStyle>
    );
};

export default BoxTag;
