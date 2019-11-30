import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native';

const ButtonListStyle = styled.View`
    flex-direction: row;
    margin: 11px 0;
`;

interface PostMenuIconListProps {
    readonly onCameraClick: any;
    readonly onHashTagClick: any;
}

const PostMenuIconList = (props: PostMenuIconListProps) => {
    const { onCameraClick, onHashTagClick } = props;

    return (
        <ButtonListStyle>
            {/*<TouchableOpacity onPress={onCameraClick}>*/}
            {/*    <FontAwesomeIcon icon={faCamera} size={20} color="white" style={{ marginLeft: 12 }} />*/}
            {/*</TouchableOpacity>*/}

            <TouchableOpacity onPress={onHashTagClick}>
                <FontAwesomeIcon icon={faHashtag} size={20} color="white" style={{ marginLeft: 12 }} />
            </TouchableOpacity>
        </ButtonListStyle>
    );
};

export default PostMenuIconList;
