import React from  'react';
import { Input } from 'antd';
const Search = Input.Search;

const SearchField = ({onSearchCards}) => {
  return (
    <Search
      placeholder="Search..."
      style={{ width: 200 }}
      onSearch={value => onSearchCards(value)}
    />  )
};

export default SearchField;