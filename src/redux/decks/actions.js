import { message } from 'antd';
import _ from 'lodash';
import {
  DELETE_DECK_SUCCESS,
  DELETE_DECKS_SUCCESS,
  FETCH_DECKS,
  SET_SELECTED_ROW_KEYS,
} from './types';

const createDeck = (values) => {
  const decks = _.isEmpty(localStorage.getItem('decks')) ? [] : JSON.parse(localStorage.getItem('decks'));

  decks.push({ ...values, id: _.uniqueId() });

  localStorage.setItem('decks', JSON.stringify(decks));
};

const fetchDecks = () => ({
  type: FETCH_DECKS,
  decks: _.isEmpty(localStorage.getItem('decks')) ? [] : JSON.parse(localStorage.getItem('decks')),
});

const setSelectedRowKeys = (selectedRowKeys, selectedRows) => ({
  type: SET_SELECTED_ROW_KEYS,
  selectedRowKeys,
  selectedRows,
});

const removeDecks = (selectedDecks) => {
  const decks = JSON.parse(localStorage.decks);

  selectedDecks.map((selectedDeck) => {
    _.remove(decks, d => d.id === selectedDeck.id);
    return localStorage.setItem('decks', JSON.stringify(decks));
  });

  message.success('Die ausgewählten Decks wurden erfolgreich gelöscht.');

  return ({
    type: DELETE_DECKS_SUCCESS,
    decks,
    selectedRowKeys: [],
  });
};

const removeDeck = (deckId) => {
  const decks = JSON.parse(localStorage.decks);

  _.remove(decks, d => d.id === deckId);

  message.success('Das ausgewählte Deck wurde erfolgreich gelöscht.');

  localStorage.setItem('decks', JSON.stringify(decks));

  return ({
    type: DELETE_DECK_SUCCESS,
    decks,
  });
};

const updateDeck = (deckId, updatedDeck) => {
  const decks = JSON.parse(localStorage.decks);

  const deckIndex = _.findIndex(decks, d => d.id === deckId);

  decks[deckIndex] = { ...updatedDeck, id: deckId };

  localStorage.setItem('decks', JSON.stringify(decks));
};

export {
  createDeck,
  fetchDecks,
  removeDeck,
  removeDecks,
  setSelectedRowKeys,
  updateDeck,
};
