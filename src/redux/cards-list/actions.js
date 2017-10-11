import _ from 'lodash';
import {
  ADD_CARD_TO_DECK,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_REQUEST,
  FETCH_TYPES_FAILURE,
  FETCH_TYPES_REQUEST,
  FETCH_TYPES_SUCCESS,
  MODAL_SHOW,
  MODAL_HIDE,
  SEARCH_CARDS_REQUEST,
  SEARCH_CARDS_FAILURE,
  SEARCH_CARDS_SUCCESS,
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

const fetchCardsRequest = params => ({
  type: FETCH_CARDS_REQUEST,
  params,
});

const fetchCardsSuccess = (cards, params, headers) => (
  {
    type: FETCH_CARDS_SUCCESS,
    cards,
    totalCount: headers['total-count'],
    params,
  }
);

const fetchCardsFailure = errors => (
  {
    type: FETCH_CARDS_FAILURE,
    errors,
  }
);

const fetchTypesFailure = error => ({
  type: FETCH_TYPES_FAILURE,
  error,
});

const fetchTypesRequest = () => ({
  type: FETCH_TYPES_REQUEST,
});


const fetchTypesSuccess = types => ({
  type: FETCH_TYPES_SUCCESS,
  types,
});

const searchCardsRequest = params => ({
  type: SEARCH_CARDS_REQUEST,
  params,
});

const searchCardsSuccess = (cards, headers, params) => ({
  type: SEARCH_CARDS_SUCCESS,
  searchCardsResult: cards,
  totalCount: headers['total-count'],
  params,
});

const searchCardsFailure = errors => ({
  type: SEARCH_CARDS_FAILURE,
  errors,
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
  fetchCardsRequest,
  fetchCardsSuccess,
  fetchCardsFailure,
  fetchTypesFailure,
  fetchTypesRequest,
  fetchTypesSuccess,
  searchCardsRequest,
  searchCardsFailure,
  searchCardsSuccess,
  showModal,
  hideModal,
};

