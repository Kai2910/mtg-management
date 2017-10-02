import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cardsListReducer from '../cards-list/cards.reducer';
import registerReducer from '../register/register.reducer';

export default combineReducers(
  {
    cardsListReducer,
    registerReducer,
    routerReducer
  }
);