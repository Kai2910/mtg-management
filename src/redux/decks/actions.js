import { message } from 'antd';
import _ from 'lodash';
import {
  DELETE_DECK_SUCCESS,
  DELETE_DECKS_SUCCESS,
  FETCH_DECKS,
  SET_SELECTED_ROW_KEYS,
} from './types';
import { MODAL_HIDE } from '../card/types';


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

  message.success('Decks successfully deleted.');

  return ({
    type: DELETE_DECKS_SUCCESS,
    decks,
    selectedRowKeys: [],
  });
};

const removeDeck = (deckId) => {
  const decks = JSON.parse(localStorage.decks);

  _.remove(decks, d => d.id === deckId);

  message.success('Deck successfully deleted.');

  localStorage.setItem('decks', JSON.stringify(decks));

  return ({
    type: DELETE_DECK_SUCCESS,
    decks,
  });
};

const updateDeck = (deckId, updatedDeck) => {
  const decks = JSON.parse(localStorage.decks);

  const deckIndex = _.findIndex(decks, d => d.id === deckId);

  decks[deckIndex] = { ...decks[deckIndex], deckName: updatedDeck.deckName, description: updatedDeck.description };

  localStorage.setItem('decks', JSON.stringify(decks));
};

const removeCard = (cardId, deckId) => {
  const decks = JSON.parse(localStorage.decks);
  const deckIndex = _.findIndex(decks, d => d.id === deckId);
  const cards = decks[deckIndex].cards;
  _.remove(cards, c => c.id === cardId);

  localStorage.setItem('decks', JSON.stringify(decks));

  message.success('Card successfully deleted');

  return {
    type: MODAL_HIDE,
  };
};

export {
  createDeck,
  fetchDecks,
  removeCard,
  removeDeck,
  removeDecks,
  setSelectedRowKeys,
  updateDeck,
};
