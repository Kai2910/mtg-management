import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cardsListReducer from '../redux/cards-list/cards.reducer';
import cardReducer from '../redux/card/card.reducer';
import decksReducer from '../decks-list/decks.reducer';
import loginReducer from '../login/login.reducer';
import registerReducer from '../register/register.reducer';

export default combineReducers(
  {
    cardsListReducer,
    cardReducer,
    decksReducer,
    loginReducer,
    registerReducer,
    routerReducer,
  },
);
