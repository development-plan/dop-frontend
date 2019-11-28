import React from 'react';
import styled from 'styled-components/native';

const ImageStyle = styled.Image`
    border-radius: 50;
    margin-right: 8px;
`;

interface NoticeImageProps {
    readonly image: string;
}

const NoticeImage = (props: NoticeImageProps) => {
    const { image } = props;
    return <ImageStyle source={{ uri: image }} style={{ width: 60, height: 60 }} />;
};

export default NoticeImage;
