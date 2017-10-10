import React from 'react';
import { Table, Button } from 'antd';

const DecksTable = ({
  columns,
  data,
  onDelete,
  onSelectChange,
  selectedRowKeys,
  selectedRows,
  loading,
}) => {
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div style={{ marginBottom: 16, marginTop: 16 }}>
        <Button
          type="danger"
          onClick={() => onDelete(selectedRows, selectedRowKeys)}
          disabled={!hasSelected}
          loading={loading}
        >
          Delete
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} decks` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};


export default DecksTable;
