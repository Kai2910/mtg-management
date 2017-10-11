import {
  FETCH_CARD_REQUEST,
  FETCH_CARD_FAILURE,
  FETCH_CARD_SUCCESS,
  MODAL_HIDE,
  MODAL_SHOW,
} from './types';

const initialState = {
  card: {},
  visible: false,
  isCardLoading: false,
  errors: '',
};

function CardReducer(state = initialState, action) {
  switch (action.type) {
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
      return state;
  }
}

export default CardReducer;
