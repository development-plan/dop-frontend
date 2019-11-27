import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
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
            <Text style={{ fontFamily: Fonts.NOTOSANSKR, color: '#bdbdbd' }}>
                <FontAwesomeIcon icon={faCommentAlt} size={12} color="#bdbdbd" /> {comment}
            </Text>
        </CommentPreviewStyle>
    );
};

export default BoxComment;
