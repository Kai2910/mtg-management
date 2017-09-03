import {
  FETCH_CARDS_FAILURE, FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS, SEARCH_CARDS_FAILURE, SEARCH_CARDS_REQUEST, SEARCH_CARDS_SUCCESS,
} from './types';

const initialState = {
  cards: [],
  searchCardsResult: [],
  errors: [],
  isLoading: false,
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
      };

    case FETCH_CARDS_FAILURE:
      return {
        ...state,
        errors: action.errors,
        isLoading: false,
      };
    case SEARCH_CARDS_REQUEST:
      return ({
        ...state,
        isLoading:true,
      });
    case SEARCH_CARDS_SUCCESS:
      return ({
        ...state,
        searchCardsResult: action.searchCardsResult,
        isLoading: false,
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