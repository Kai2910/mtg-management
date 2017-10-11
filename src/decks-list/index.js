import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import DropOption from '../modules/components/widgets/data-option/DropOption';
import DecksTable from './componenten/table';
import {
  fetchDecks,
  removeDeck,
  removeDecks,
  setSelectedRowKeys
} from '../decks-list/actions';

const mapDispatchToProps = dispatch => ({
  onEditDeck: () => (dispatch(push('/edit-deck'))),
  onRemoveDeck: deckId => (dispatch(removeDeck(deckId))),
  onRemoveDecks: selectedDecks => (dispatch(removeDecks(selectedDecks))),
  onLoadDecks: () => (dispatch(fetchDecks())),
  onNewDeck: () => (dispatch(push('/new-deck'))),
  onSelectChange: (selectedRowKeys, selectedRows) => (dispatch(setSelectedRowKeys(selectedRowKeys, selectedRows))),
});

const mapStateToProps = state => ({
  decks: state.decksReducer.decks,
  selectedRowKeys: state.decksReducer.selectedRowKeys,
  selectedRows: state.decksReducer.selectedRows,
});

class DecksContainer extends React.Component {
  componentWillMount() {
    const { onLoadDecks } = this.props;
    onLoadDecks();
  }

  render() {
    const {
      decks,
      onEditDeck,
      onRemoveDeck,
      onRemoveDecks,
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
          decks={decks}
          onSelectChange={onSelectChange}
          selectedRowKeys={selectedRowKeys}
          selectedRows={selectedRows}
          onDeleteDeck={onRemoveDeck}
          onDeleteDecks={onRemoveDecks}
          onEdit={onEditDeck}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksContainer);
