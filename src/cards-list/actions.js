import {
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_REQUEST,
  FETCH_CARD_FAILURE,
  FETCH_CARD_REQUEST,
  FETCH_CARD_SUCCESS,
  FETCH_TYPES_FAILURE,
  FETCH_TYPES_REQUEST,
  FETCH_TYPES_SUCCESS,
  MODAL_SHOW,
  MODAL_HIDE,
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
      cards,
      totalCount: headers['total-count'],
      params,
    }
  );
};

const fetchCardsFailure = (errors) => {
  return (
    {
      type: FETCH_CARDS_FAILURE,
      errors: errors,
    }
  );
};

const fetchCardFailure = (error) => {
  return ({
    type: FETCH_CARD_FAILURE,
    error,
  });
};

const fetchCardRequest = (cardId) => {
  return ({
    type: FETCH_CARD_REQUEST,
    cardId,
  });
};

const fetchCardSuccess = (card) => {
  return ({
    type: FETCH_CARD_SUCCESS,
    card,
  });
};

const fetchTypesFailure = (error) => {
  return ({
    type: FETCH_TYPES_FAILURE,
    error,
  });
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
  });
};

const showModal = (cardId) => {
  return ({
    type: MODAL_SHOW,
    cardId,
  });
};

const hideModal = () => {
  return ({
    type: MODAL_HIDE,
  });
};

export {
  fetchCardsRequest,
  fetchCardsSuccess,
  fetchCardsFailure,
  fetchCardFailure,
  fetchCardRequest,
  fetchCardSuccess,
  fetchTypesFailure,
  fetchTypesRequest,
  fetchTypesSuccess,
  searchCardsRequest,
  searchCardsFailure,
  searchCardsSuccess,
  showModal,
  hideModal,
};

