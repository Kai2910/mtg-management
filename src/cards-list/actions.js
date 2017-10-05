import {
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_REQUEST,
  FETCH_TYPES_FAILURE,
  FETCH_TYPES_REQUEST,
  FETCH_TYPES_SUCCESS,
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

const fetchTypesFailure = (error) => {
  return ({
    type: FETCH_TYPES_FAILURE,
    error
  })
};

const fetchTypesRequest = () => {
  return ({
    type: FETCH_TYPES_REQUEST
  })
};


const fetchTypesSuccess = (types) => {
  return ({
    type: FETCH_TYPES_SUCCESS,
    types
  })
}

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
  fetchTypesFailure,
  fetchTypesRequest,
  fetchTypesSuccess,
  searchCardsRequest,
  searchCardsFailure,
  searchCardsSuccess,
}

