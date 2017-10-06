import React from 'react';
import { Select } from 'antd';

const TypeFilterField = ({ children, onFilterByType, params }) => (
  <Select
    style={{ width: '30%' }}
    placeholder="Types"
    onChange={values => onFilterByType(values, params)}
  >
    {children}
  </Select>
);

export default TypeFilterField;
