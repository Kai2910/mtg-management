import {
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  FETCH_CARD_REQUEST,
  FETCH_CARD_FAILURE,
  FETCH_CARD_SUCCESS,
  FETCH_TYPES_FAILURE,
  FETCH_TYPES_SUCCESS,
  MODAL_HIDE,
  MODAL_SHOW,
  SEARCH_CARDS_FAILURE,
  SEARCH_CARDS_REQUEST,
  SEARCH_CARDS_SUCCESS,
} from './types';

const initialState = {
  cards: [],
  card: {},
  cardId: '',
  searchCardsResult: [],
  errors: [],
  isLoading: false,
  isCardLoading: false,
  totalCount: 0,
  params: {
    page: 1,
    pageSize: 25,
    colors: '',
    name: '',
    contains: 'multiverseid'
  },
  types: [],
  visible: false,
};

function CardsListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARDS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.cards,
        isLoading: false,
        totalCount: action.totalCount,
        params: action.params
      };

    case FETCH_CARDS_FAILURE:
      return {
        ...state,
        errors: action.errors,
        isLoading: false,
      };

    case FETCH_CARD_FAILURE:
      return {
        ...state,
        errors: action.error,
        isCardLoading: false,
      };

    case FETCH_CARD_REQUEST:
      return {
        ...state,
        isCardLoading: true,
      };

    case FETCH_CARD_SUCCESS:
      return {
        ...state,
        card: action.card,
        isCardLoading: false,
      };

    case FETCH_TYPES_FAILURE:
      return {
        ...state,
        errors: action.error,
      };
    case FETCH_TYPES_SUCCESS:
      return {
        ...state,
        types: action.types
      };
    case SEARCH_CARDS_REQUEST:
      return ({
        ...state,
        isLoading: true,
      });
    case SEARCH_CARDS_SUCCESS:
      return ({
        ...state,
        cards: action.searchCardsResult,
        isLoading: false,
        totalCount: action.totalCount,
        params: action.params
      });
    case SEARCH_CARDS_FAILURE:
      return ({
        ...state,
        errors: action.errors,
        isLoading: false,
      });
    case MODAL_SHOW:
      return ({
        ...state,
        visible: true,
        cardId: action.cardId,
      });
    case MODAL_HIDE:
      return ({
        ...state,
        visible: false,
      });
    default:
      return state
  }
}

export default CardsListReducer;