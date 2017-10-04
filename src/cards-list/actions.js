import {
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_REQUEST,
  SEARCH_CARDS_REQUEST,
  SEARCH_CARDS_FAILURE,
  SEARCH_CARDS_SUCCESS,
} from './types';

const fetchCardsRequest = (params) => {
  return ({
    type: FETCH_CARDS_REQUEST,
    params,
  });
};

const fetchCardsSuccess = (cards, params, headers) => {
  return (
    {
      type: FETCH_CARDS_SUCCESS,
      cards: cards,
      totalCount: headers['total-count'],
      params
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

const searchCardsRequest = (params) => {
  return ({
    type: SEARCH_CARDS_REQUEST,
    params
  })
};

const searchCardsSuccess = (cards, headers, params) => {
  return ({
    type: SEARCH_CARDS_SUCCESS,
    searchCardsResult: cards,
    totalCount: headers['total-count'],
    params
  })
};

const searchCardsFailure = (errors) => {
  return ({
    type: SEARCH_CARDS_FAILURE,
    errors: errors,
  })
};

export {
  fetchCardsRequest,
  fetchCardsSuccess,
  fetchCardsFailure,
  searchCardsRequest,
  searchCardsFailure,
  searchCardsSuccess,
}

