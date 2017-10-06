import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

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
