import React from 'react';
import styled from 'styled-components/native';

const TimeWrapperStyle = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: center;
    margin-right: 4px;
`;

const TimeTextStyle = styled.Text`
    font-weight: bold;
    color: #757575;
`;

interface NoticeTimeProps {
    readonly time: number;
}

const NoticeTime = (props: NoticeTimeProps) => {
    const { time } = props;

    return (
        <TimeWrapperStyle>
            <TimeTextStyle>{time ? `${time}분 전` : '방금 전'}</TimeTextStyle>
        </TimeWrapperStyle>
    );
};

export default NoticeTime;
