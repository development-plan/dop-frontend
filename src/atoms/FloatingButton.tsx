import React from 'react';
import styled from 'styled-components/native';

const ButtonStyle = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    background-color: #212121;
`;

const TextStyle = styled.Text`
    font-size: 20px;
    color: white;
`;

interface FloatingButtonProps {
    readonly onPress?: any;
}

const FloatingButton = (props: FloatingButtonProps) => {
    const { onPress } = props;

    return (
        <ButtonStyle onPress={onPress}>
            <TextStyle>+</TextStyle>
        </ButtonStyle>
    );
};

export default FloatingButton;
