import React, { Dispatch, SetStateAction, useState } from 'react';
import { TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Line from '../../../atoms/TagModal/Line';

const TagItemListStyle = styled.View`
    flex-direction: column;
`;

const TagItemStyle = styled.View`
    flex-direction: row;
    margin: 8px 30px;
`;

const AddTagStyle = styled.View`
    margin: 0 30px;
`;

const TagStyle = styled.Text`
    max-width: 50%;
`;

const DeleteTagStyle = styled.TouchableOpacity`
    flex: 1;
    align-items: flex-end;
    justify-content: center;
`;

interface TagListProps {
    readonly tagsState: [string[], Dispatch<SetStateAction<string[]>>];
}

const TagList = (props: TagListProps) => {
    const { tagsState } = props;
    const [tags, setTags] = tagsState;
    const [input, setInput] = useState<string>('');

    const onTagChangeText = (t: string) => setInput(t);

    const onTagInputSubmit = () => {
        setTags((tag) => [...tag, input]);
        setInput('');
    };

    const removeTag = (tag: string) => {
        setTags(tags.filter((i) => i !== tag));
    };

    return (
        <TagItemListStyle>
            {tags.map((x, index) => {
                return (
                    <View key={index}>
                        <TagItemStyle>
                            <TagStyle>{x}</TagStyle>
                            <DeleteTagStyle onPress={() => removeTag(x)}>
                                <FontAwesomeIcon icon={faTimes} />
                            </DeleteTagStyle>
                        </TagItemStyle>
                        <Line />
                    </View>
                );
            })}

            <AddTagStyle>
                <TextInput placeholder="태그 추가" onSubmitEditing={onTagInputSubmit} value={input} onChangeText={onTagChangeText} />
            </AddTagStyle>
        </TagItemListStyle>
    );
};

export default TagList;
