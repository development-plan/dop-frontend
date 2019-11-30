import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const ModalHeaderStyle = styled.View`
    flex-direction: row;
    margin: 8px 0;
`;

const TitleWrapper = styled.View`
    margin-left: 140px;
`;

const ModalTitleStyle = styled.Text`
    font-size: 22px;
`;

const ConfirmStyle = styled.TouchableOpacity`
    flex: 1;
    align-items: flex-end;
    justify-content: center;
    margin-right: 16px;
`;

interface TagModalHeaderProps {
    readonly onConfirmPress?: any;
}

const TagModalHeader = (props: TagModalHeaderProps) => {
    const { onConfirmPress } = props;

    return (
        <ModalHeaderStyle>
            <TitleWrapper>
                <ModalTitleStyle>태그 설정</ModalTitleStyle>
            </TitleWrapper>
            <ConfirmStyle onPress={onConfirmPress}>
                <Text style={{ fontSize: 18 }}>확인</Text>
            </ConfirmStyle>
        </ModalHeaderStyle>
    );
};

export default TagModalHeader;
