import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import DecksTable from './table';
import Page from '../../modules/components/widgets/page/page';
import {
  fetchDecks,
  removeDeck,
  removeDecks,
  setSelectedRowKeys,
} from '../../redux/decks/actions';

const mapDispatchToProps = dispatch => ({
  onEditDeck: deckId => (dispatch(push(`/edit-deck/${deckId}`))),
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

class DecksList extends React.Component {
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
      <Page header={'All Decks'}>
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
      </Page>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksList);
