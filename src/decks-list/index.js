import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import DecksTable from './componenten/table';
import { fetchDecks, removeDeck, setSelectedRowKeys } from '../decks-list/actions';

const mapDispatchToProps = dispatch => ({
  onRemoveDeck: (selectedDecks, selectedRowKeys) => (dispatch(removeDeck(selectedDecks, selectedRowKeys))),
  onLoadDecks: () => (dispatch(fetchDecks())),
  onNewDeck: () => (dispatch(push('/new-deck'))),
  onSelectChange: (selectedRowKeys, selectedRows) => (dispatch(setSelectedRowKeys(selectedRowKeys, selectedRows))),
});

const mapStateToProps = state => ({
  decks: state.decksReducer.decks,
  selectedRowKeys: state.decksReducer.selectedRowKeys,
  selectedRows: state.decksReducer.selectedRows,
});

const COLUMNS = [
  {
    title: 'Name',
    dataIndex: 'deckName',
    sorter: (a, b) => a.deckName.length - b.deckName.length,
  },
];

class DecksContainer extends React.Component {
  componentWillMount() {
    const { onLoadDecks } = this.props;
    onLoadDecks();
  }

  render() {
    const {
      decks,
      onRemoveDeck,
      onNewDeck,
      onSelectChange,
      selectedRowKeys,
      selectedRows,
    } = this.props;

    return (
      <div>
        <Button
          type="primary"
          onClick={() => onNewDeck()}
        >
          New Deck
        </Button>
        <DecksTable
          columns={COLUMNS}
          data={decks}
          onSelectChange={onSelectChange}
          selectedRowKeys={selectedRowKeys}
          selectedRows={selectedRows}
          onDelete={onRemoveDeck}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksContainer);
