import React, {Dispatch, SetStateAction, useState} from 'react';
import styled from 'styled-components/native';

const SearchBarStyle = styled.TextInput`
    background-color: #e6e6e6;
    border-radius: 10px;
    height: 40px;
    width: 85%;
    text-align: center;
    align-self: center;
    margin: 10px 0;
`;

interface SearchBarProps {
    readonly searchTextState: [string, Dispatch<SetStateAction<string>>];
    readonly onSubmitEditing?: any;
}

const SearchBar = (props: SearchBarProps) => {
    const { searchTextState, onSubmitEditing } = props;
    const [text, setText] = searchTextState;

    const onSearchBarChange = (t: string) => {
        setText(t);
    };

    return <SearchBarStyle onSubmitEditing={onSubmitEditing} onChangeText={onSearchBarChange} value={text} placeholder="검색 (현재는 영어 검색어만 가능)" />;
};

export default SearchBar;
