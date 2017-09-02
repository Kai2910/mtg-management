import {
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_SUCCESS,
} from './types';

const initialState = {
  cards: [],
  errors: [],
};

function CardsListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.cards,
      };

    case FETCH_CARDS_FAILURE:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state
  }
}

export default CardsListReducer;