import { message } from 'antd';
import _ from 'lodash';
import {
  DELETE_DECK_SUCCESS,
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

const setSelectedRowKeys = (selectedRowKeys, selectedRows) => {
  return ({
    type: SET_SELECTED_ROW_KEYS,
    selectedRowKeys,
    selectedRows,
  });
};

const removeDeck = (selectedDecks) => {
  const decks = JSON.parse(localStorage.decks);

  selectedDecks.map((selectedDeck) => {
    _.remove(decks, d => d.id === selectedDeck.id);
    return localStorage.setItem('decks', JSON.stringify(decks));
  });

  message.success('Die ausgewählten Decks wurden erfolgreich gelöscht.');

  return ({
    type: DELETE_DECK_SUCCESS,
    decks,
    selectedRowKeys: [],
  });
};

export {
  createDeck,
  fetchDecks,
  removeDeck,
  setSelectedRowKeys,
}