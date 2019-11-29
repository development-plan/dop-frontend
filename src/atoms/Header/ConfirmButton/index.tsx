import React from 'react';
import styled from 'styled-components/native';

const ButtonStyle = styled.TouchableOpacity`
    background-color: white;
    margin-right: 10px;
`;

const TextStyle = styled.Text<{ disabled: boolean }>`
    font-size: 16px;
    color: black;
    opacity: ${(props) => (props.disabled ? '0.2' : '1')};
`;

interface ConfirmButtonProps {
    readonly onPress?: any;
    readonly disabled?: boolean;
}

const ConfirmButton = (props: ConfirmButtonProps) => {
    const { onPress, disabled } = props;

    return (
        <ButtonStyle disabled={disabled} onPress={onPress}>
            <TextStyle disabled={disabled}>확인</TextStyle>
        </ButtonStyle>
    );
};

export default ConfirmButton;
