import React from 'react';
import styled from 'styled-components/native';
import BoxAuthor from '../../atoms/Box/BoxAuthor';
import BoxComment from '../../atoms/Box/BoxComment';
import BoxContents from '../../atoms/Box/BoxContents';
import BoxData from '../../structures/BoxData';
import BoxTag from '../../atoms/Box/BoxTag';

const BoxStyle = styled.View`
    margin: 10px 14px;
    border: #bdbdbd 1px solid;
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
    readonly boxData: BoxData;
}

const Box = (props: BoxProps) => {
    const { boxData } = props;
    const { profile, name, commentCount, title, contents, tags } = boxData;

    return (
        <BoxStyle>
            <WrapperStyle>
                <TopWrapperStyle>
                    <BoxAuthor profile={profile} name={name} />
                    <BoxComment comment={commentCount} />
                </TopWrapperStyle>

                <BoxContents title={title}>{contents}</BoxContents>

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
