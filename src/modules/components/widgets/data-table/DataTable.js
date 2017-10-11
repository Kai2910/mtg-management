import React from 'react';
import { Table } from 'antd';

const DataTable = ({ rowSelection, columns, data }) => {
  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
};

export default DataTable;
