import React from 'react';
import { Button, Modal } from 'antd';
import DataTable from '../../components/DataTable/DataTable';
import DropOption from '../../components/DropOption/DropOption';

const confirm = Modal.confirm;

const DecksTable = ({
  decks,
  onDeleteDeck,
  onDeleteDecks,
  onEdit,
  onSelectChange,
  selectedRowKeys,
  selectedRows,
  loading,
}) => {
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleMenuClick = (deck, e) => {
    if (e.key === '1') {
      onEdit();
    } else if (e.key === '2') {
      confirm({
        title: `Möchten Sie "${deck.deckName}" wirklich löschen?`,
        onOk() {
          onDeleteDeck(deck.id);
        },
      });
    }
  };

  const COLUMNS = [
    {
      title: 'Name',
      dataIndex: 'deckName',
      sorter: (a, b) => a.deckName.length - b.deckName.length,
    }, {
      title: 'Aktion',
      key: 'operation',
      width: 100,
      className: 'center',
      render: (text, record) => (
        <DropOption
          onMenuClick={e => handleMenuClick(record, e)}
          menuOptions={[
            { key: '1', name: 'Editieren' },
            { key: '2', name: 'Löschen' },
          ]}
        />
      ),
    },
  ];

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div style={{ marginBottom: 16, marginTop: 16 }}>
        <Button
          type="danger"
          onClick={() => onDeleteDecks(selectedRows)}
          disabled={!hasSelected}
          loading={loading}
        >
          Delete
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} decks` : ''}
        </span>
      </div>
      <DataTable rowSelection={rowSelection} columns={COLUMNS} data={decks} />
    </div>
  );
};


export default DecksTable;
