import {
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  FETCH_CARDS
} from './types';

const fetchCards = () => {
  return ({
    type: FETCH_CARDS,
  });
};

const fetchCardsSuccess = (cards) => {
  return (
    {
      type: FETCH_CARDS_SUCCESS,
      cards: cards
    }
  )
};

const fetchCardsFailure = (errors) => {
  return (
    {
      type: FETCH_CARDS_FAILURE,
      errors: errors,
    }
  )
};

export {
  fetchCards,
  fetchCardsSuccess,
  fetchCardsFailure,
}

