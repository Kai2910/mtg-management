import { combineReducers } from 'redux';
import cardsListReducer from '../cards-list/cards.reducer';
import loginReducer from '../login/login.reducer';

export default combineReducers(
  {
    cardsListReducer,
    loginReducer,
  }
);