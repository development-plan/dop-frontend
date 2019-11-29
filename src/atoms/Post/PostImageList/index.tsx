import React from 'react';
import styled from 'styled-components/native';

const ImageViewerStyle = styled.ScrollView`
    flex-direction: row;
    background-color: white;
`;

const ImageStyle = styled.Image`
    margin: 8px;
`;

interface PostImageListProps {
    readonly images: string[];
}

const PostImageList = (props: PostImageListProps) => {
    const { images } = props;

    return (
        <ImageViewerStyle horizontal contentInsetAdjustmentBehavior="automatic">
            {images.map((x, index) => {
                return <ImageStyle key={index} source={{ uri: x }} style={{ width: 80, height: 80 }} />;
            })}
        </ImageViewerStyle>
    );
};

export default PostImageList;
