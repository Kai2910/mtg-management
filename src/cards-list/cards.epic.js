import 'rxjs';
import { combineEpics } from 'redux-observable';
import {
  fetchCardsFailure,
  fetchCardsSuccess,
  searchCardsFailure,
  searchCardsSuccess,
} from './actions';
import Api from '../api';
import {
  FETCH_CARDS_REQUEST,
  SEARCH_CARDS_REQUEST
} from './types';

const fetchCardsEpic = action$ =>
  action$.ofType(FETCH_CARDS_REQUEST)
    .mergeMap((action) => {
      return Api.getCards(action)
        .map((response) => {
          return fetchCardsSuccess(response.cards)
        })
        .catch(errors => fetchCardsFailure(errors))
    });

const searchCardsEpic = action$ =>
  action$.ofType(SEARCH_CARDS_REQUEST)
    .mergeMap((action) => {
      return Api.getCards(action, action.keyword)
        .map((response) => {
          return searchCardsSuccess(response.cards)
        })
        .catch(errors => searchCardsFailure)
    });

export default combineEpics(
  fetchCardsEpic,
  searchCardsEpic
)