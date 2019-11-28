import React from 'react';
import styled from 'styled-components/native';

const ContentsWrapperStyle = styled.View`
    flex-direction: column;
    justify-content: center;
`;

const MainTextStyle = styled.Text`
    font-weight: bold;
`;

const SubTextStyle = styled.Text`
    font-size: 12px;
    max-width: 68%;
    color: #757575;
`;

interface NoticeContents {
    readonly title: string;
    readonly children: string;
}

const NoticeContents = (props: NoticeContents) => {
    const { title, children } = props;

    return (
        <ContentsWrapperStyle>
            <MainTextStyle>{title}</MainTextStyle>
            <SubTextStyle numberOfLines={1}>{children}</SubTextStyle>
        </ContentsWrapperStyle>
    );
};

export default NoticeContents;
