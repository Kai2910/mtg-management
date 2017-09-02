import { combineReducers } from 'redux';
import cardsListReducer from '../cards-list/cards.reducer';

export default combineReducers(
  {
    cardsListReducer,
  }
);