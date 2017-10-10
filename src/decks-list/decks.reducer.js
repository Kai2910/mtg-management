import {
  DELETE_DECK_SUCCESS,
  FETCH_DECKS,
  SET_SELECTED_ROW_KEYS,
} from './types';

const initialState = {
  decks: [],
  selectedRowKeys: [],
  selectedRows: [],
};

function decksReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_DECK_SUCCESS:
      return {
        ...state,
        decks: action.decks,
        selectedRowKeys: action.selectedRowKeys,
      };
    case FETCH_DECKS:
      return {
        ...state,
        decks: action.decks,
      };
    case SET_SELECTED_ROW_KEYS:
      return {
        ...state,
        selectedRowKeys: action.selectedRowKeys,
        selectedRows: action.selectedRows,
      };
    default:
      return state;
  }
}

export default decksReducer;
