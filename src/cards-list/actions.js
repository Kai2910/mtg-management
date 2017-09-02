import {
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_REQUEST,
} from './types';

const fetchCardsRequest = (page, pageSize) => {
  return ({
    type: FETCH_CARDS_REQUEST,
    page: page,
    pageSize: pageSize
  });
};

const fetchCardsSuccess = (cards, pageSize) => {
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
  fetchCardsRequest,
  fetchCardsSuccess,
  fetchCardsFailure,
}

