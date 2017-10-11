import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import {
  fetchCardsFailure,
  fetchCardsSuccess,
  fetchTypesFailure,
  fetchTypesSuccess,
  searchCardsFailure,
  searchCardsSuccess,
} from './actions';
import Api from '../../api';
import {
  FETCH_CARDS_REQUEST,
  FETCH_TYPES_REQUEST,
  SEARCH_CARDS_REQUEST,
} from './types';

const fetchCardsEpic = action$ =>
  action$.ofType(FETCH_CARDS_REQUEST)
    .mergeMap(action => Observable.fromPromise(Api.getCards(action.params))
      .map(response =>
        fetchCardsSuccess(response.data.cards, response.config.params, response.headers),
      )
      .catch(errors => fetchCardsFailure(errors)));

const fetchTypesEpic = action$ =>
  action$.ofType(FETCH_TYPES_REQUEST)
    .mergeMap(() => Observable.fromPromise(Api.getTypes())
      .map(response => fetchTypesSuccess(response.data.types))
      .catch(errors => fetchTypesFailure(errors)));

const searchCardsEpic = action$ =>
  action$.ofType(SEARCH_CARDS_REQUEST)
    .mergeMap(action => Observable.fromPromise(Api.getCards(action.params))
      .map(response =>
        searchCardsSuccess(response.data.cards, response.headers, response.config.params),
      )
      .catch(errors => searchCardsFailure(errors)));

export default combineEpics(
  fetchCardsEpic,
  fetchTypesEpic,
  searchCardsEpic,
);
