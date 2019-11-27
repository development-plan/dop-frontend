import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Fonts } from '../../../Fonts';

const CommentPreviewStyle = styled.View`
    align-self: flex-end;
    font-size: 10px;
`;

interface BoxCommentProps {
    readonly comment: string;
}

const BoxComment = (props: BoxCommentProps) => {
    const { comment } = props;

    return (
        <CommentPreviewStyle>
            <Text style={{ fontFamily: Fonts.NOTOSANSKR, color: '#bdbdbd' }}>아이콘 {comment}</Text>
        </CommentPreviewStyle>
    );
};

export default BoxComment;
