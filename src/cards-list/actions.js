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

