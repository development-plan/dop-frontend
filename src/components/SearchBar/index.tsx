import React, { useState } from 'react';
import styled from 'styled-components/native';

const SearchBarStyle = styled.TextInput`
    background-color: #e6e6e6;
    border-radius: 10px;
    height: 75%;
    width: 85%;
    text-align: center;
`;

const SearchBar = () => {
    const [text, setText] = useState<string>('');

    const onSearchBarChange = (t: string) => {
        setText(t);
    };

    return <SearchBarStyle onChangeText={onSearchBarChange} value={text} placeholder="검색" />;
};

export default SearchBar;
