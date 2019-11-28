import React from 'react';
import styled from 'styled-components/native';
import NoticeImage from '../../atoms/Notice/NoticeProfile';
import NoticeContents from '../../atoms/Notice/NoticeContents';
import NoticeTime from '../../atoms/Notice/NoticeTime';
import NoticeData from '../../structures/NoticeData';

const WrapperStyle = styled.View`
    border: #bdbdbd 0.2px solid;
    flex-direction: row;
    background-color: white;
    padding: 20px;
`;

interface NoticeBoxProps {
    readonly noticeData: NoticeData;
}

const NoticeBox = (props: NoticeBoxProps) => {
    const { noticeData } = props;
    const { profile, title, contents, time } = noticeData;
    return (
        <WrapperStyle>
            <NoticeImage image={profile} />
            <NoticeContents title={title}>{contents}</NoticeContents>
            <NoticeTime time={time} />
        </WrapperStyle>
    );
};

export default NoticeBox;
