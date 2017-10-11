import { combineEpics } from 'redux-observable';
import fetchCardsEpic from '../redux/cards-list/cards.epic';

export default combineEpics(
  fetchCardsEpic,
);
