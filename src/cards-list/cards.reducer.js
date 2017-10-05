import {
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS, FETCH_TYPES_FAILURE, FETCH_TYPES_SUCCESS,
  SEARCH_CARDS_FAILURE,
  SEARCH_CARDS_REQUEST,
  SEARCH_CARDS_SUCCESS,
} from './types';

const initialState = {
  cards: [],
  searchCardsResult: [],
  errors: [],
  isLoading: false,
  totalCount: 0,
  params: {
    page: 1,
    pageSize: 25,
    colors: '',
    name: ''
  },
  types: [],
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
        isLoading:true,
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
    default:
      return state
  }
}

export default CardsListReducer;