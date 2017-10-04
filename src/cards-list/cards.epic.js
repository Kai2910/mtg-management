import { Observable } from 'rxjs';
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
      return Observable.fromPromise(Api.getCards(action.params))
        .map((response) => {
          return fetchCardsSuccess(response.data.cards, response.config.params, response.headers)
        })
        .catch(errors => fetchCardsFailure(errors))
    });

const searchCardsEpic = action$ =>
  action$.ofType(SEARCH_CARDS_REQUEST)
    .mergeMap((action) => {
      return Observable.fromPromise(Api.getCards(action.params))
        .map((response) => {
          return searchCardsSuccess(response.data.cards, response.headers, response.config.params)
        })
        .catch(errors => searchCardsFailure)
    });

export default combineEpics(
  fetchCardsEpic,
  searchCardsEpic
)