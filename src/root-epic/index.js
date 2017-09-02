import { combineEpics } from 'redux-observable';
import fetchCardsEpic  from '../cards-list/cards.epic';

export default combineEpics(
  fetchCardsEpic,
);