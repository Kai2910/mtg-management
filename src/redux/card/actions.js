import _ from 'lodash';
import {
  ADD_CARD_TO_DECK,
  FETCH_CARD_FAILURE,
  FETCH_CARD_REQUEST,
  FETCH_CARD_SUCCESS,
  MODAL_SHOW,
  MODAL_HIDE,
} from './types';

const addCardToDeck = (card, deckIndex) => {
  const decks = JSON.parse(localStorage.getItem('decks'));
  const deck = decks[deckIndex];
  const currentCards = (!_.isEmpty(deck.cards)) ? deck.cards : [];

  currentCards.push(card);

  decks[deckIndex] = { ...deck, cards: currentCards };

  localStorage.setItem('decks', JSON.stringify(decks));

  return ({
    type: ADD_CARD_TO_DECK,
  });
};

const fetchCardFailure = error => ({
  type: FETCH_CARD_FAILURE,
  error,
});

const fetchCardRequest = cardId => ({
  type: FETCH_CARD_REQUEST,
  cardId,
});

const fetchCardSuccess = card => ({
  type: FETCH_CARD_SUCCESS,
  card,
});

const showModal = cardId => ({
  type: MODAL_SHOW,
  cardId,
});

const hideModal = () => ({
  type: MODAL_HIDE,
});


export {
  addCardToDeck,
  fetchCardFailure,
  fetchCardRequest,
  fetchCardSuccess,
  hideModal,
  showModal,
}