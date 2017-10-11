import React from 'react';
import { Col, Input, Row, Select } from 'antd';

const Option = Select.Option;
const Search = Input.Search;
const COLORS = [
  'Black',
  'Blue',
  'Green',
  'Red',
  'White',
];

const CardsFilter = ({ onFilterByColor, onFilterByType, onSearchCards, params, types }) => {
  return (
    <Row>
      <Col xs={13} sm={10} md={7} lg={5} xl={4}>
        <Search
          placeholder="Search..."
          style={{ width: 200 }}
          onSearch={value => onSearchCards(params, value)}
        />
      </Col>
      <Col xs={13} sm={8} md={7} lg={5} xl={4}>
        <Select
          mode="multiple"
          style={{ width: '30%' }}
          placeholder="Colors"
          onChange={values => onFilterByColor(values, params)}
        >
          {
            COLORS.map(c => (<Option key={c}>{c}</Option>))
          }
        </Select>
      </Col>
      <Col xs={13} sm={8} md={7} lg={5} xl={4}>
        <Select
          style={{ width: '30%' }}
          placeholder="Types"
          onChange={values => onFilterByType(values, params)}
        >
          {
            types.map(type => <Option key={type}>{type}</Option>)
          }
        </Select>
      </Col>
    </Row>
  );
};

export default CardsFilter;
