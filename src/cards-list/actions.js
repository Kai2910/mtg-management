import {
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_REQUEST,
  SEARCH_CARDS_REQUEST,
  SEARCH_CARDS_FAILURE,
  SEARCH_CARDS_SUCCESS,
} from './types';

const fetchCardsRequest = (page, pageSize) => {
  return ({
    type: FETCH_CARDS_REQUEST,
    page: page,
    pageSize: pageSize
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

const searchCardsRequest = (keyword) => {
  return ({
    type: SEARCH_CARDS_REQUEST,
    keyword: keyword,
  })
};

const searchCardsSuccess = (cards) => {
  return ({
    type: SEARCH_CARDS_SUCCESS,
    searchCardsResult: cards,
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

