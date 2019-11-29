import React from 'react';
import styled from 'styled-components/native';

const ButtonStyle = styled.TouchableOpacity`
    background-color: white;
    margin-left: 10px;
`;

const TextStyle = styled.Text`
    font-size: 16px;
    color: black;
`;

interface CancelButtonProps {
    readonly onPress?: any;
}

const CancelButton = (props: CancelButtonProps) => {
    const { onPress } = props;

    return (
        <ButtonStyle onPress={onPress}>
            <TextStyle>취소</TextStyle>
        </ButtonStyle>
    );
};

export default CancelButton;
