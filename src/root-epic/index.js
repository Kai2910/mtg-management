import { combineEpics } from 'redux-observable';
import fetchCardsEpic from '../redux/cards-list/cards.epic';
import fetchCardEpic from '../redux/card/card.epic';

export default combineEpics(
  fetchCardsEpic,
  fetchCardEpic,
);
