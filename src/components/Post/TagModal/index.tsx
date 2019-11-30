import React, {Dispatch, SetStateAction} from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import TagModalHeader from './TagModalHeader';
import HeaderLine from '../../../atoms/TagModal/HeaderLine';
import TagList from './TagList';

const ModalStyle = styled.View`
    background-color: white;
    border-radius: 5px;
    height: 500px;
`;

interface TagModalProps {
    readonly tagsState: [string[], Dispatch<SetStateAction<string[]>>];
    readonly modalOpenState: [boolean, Dispatch<SetStateAction<boolean>>];
}

const TagModal = (props: TagModalProps) => {
    const { tagsState, modalOpenState } = props;
    const [isTagModalOpen, setTagModalOpen] = modalOpenState;

    return (
        <Modal isVisible={isTagModalOpen} onBackdropPress={() => setTagModalOpen(false)}>
            <ModalStyle>
                <TagModalHeader onConfirmPress={() => setTagModalOpen(false)} />

                <HeaderLine />

                <TagList tagsState={tagsState} />
            </ModalStyle>
        </Modal>
    );
};

export default TagModal;
