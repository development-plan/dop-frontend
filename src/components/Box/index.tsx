import React from 'react';
import styled from 'styled-components/native';
import BoxAuthor from '../../atoms/Box/BoxAuthor';
import BoxComment from '../../atoms/Box/BoxComment';
import BoxContents from './BoxContents';
import PostPayload from '../../structures/PostPayload';
import BoxTag from '../../atoms/Box/BoxTag';

const BoxStyle = styled.View`
    margin: 10px 16px;
    border: #bdbdbd 0.8px solid;
    background-color: #ffffff;
    border-radius: 6px;
`;

const WrapperStyle = styled.View`
    margin: 8px;
`;

const TopWrapperStyle = styled.View`
    flex: 1;
    flex-direction: row;
`;

const TagWrapperStyle = styled.View`
    flex-direction: row;
`;

interface BoxProps {
    readonly boxData: PostPayload;
}

const Box = (props: BoxProps) => {
    const { boxData } = props;
    const { author, answers, title, content, tags, images } = boxData;
    const { image, nickname } = author;

    return (
        <BoxStyle>
            <WrapperStyle>
                <TopWrapperStyle>
                    <BoxAuthor profile={image} name={nickname} />
                    <BoxComment comment={answers.length} />
                </TopWrapperStyle>

                <BoxContents title={title} images={images}>{content}</BoxContents>

                <TagWrapperStyle>
                    {tags.map((x: string, index: number) => {
                        return <BoxTag key={index} tag={x} />;
                    })}
                </TagWrapperStyle>
            </WrapperStyle>
        </BoxStyle>
    );
};

export default Box;
