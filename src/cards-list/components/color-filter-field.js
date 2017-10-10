import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

// It makes a lot more sense to map through a list
// const COLORS = [
//   'Black',
//   'Blue',
//   // ...
// ]
//
// COLORS.map(c => (<Option key={c}>{c}</Option>))
//
// than to do it like you did... :/

const FilterColorsField = ({ onFilterByColor, params }) => (
  <Select
    mode="multiple"
    style={{ width: '30%' }}
    placeholder="Colors"
    onChange={values => onFilterByColor(values, params)}
  >
    <Option key="Black"> Black </Option>
    <Option key="Blue"> Blue </Option>
    <Option key="Green"> Green </Option>
    <Option key="Red"> Red </Option>
    <Option key="White"> White </Option>
  </Select>
);

export default FilterColorsField;
