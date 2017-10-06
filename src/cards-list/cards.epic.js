import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import {
  fetchCardFailure,
  fetchCardsFailure,
  fetchCardsSuccess, fetchCardSuccess,
  fetchTypesFailure,
  fetchTypesSuccess,
  searchCardsFailure,
  searchCardsSuccess,
} from './actions';
import Api from '../api';
import {
  FETCH_CARD_REQUEST,
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

const fetchCardEpic = action$ =>
  action$.ofType(FETCH_CARD_REQUEST)
    .mergeMap(action => Observable.fromPromise(Api.getCard(action.cardId))
      .map(response => fetchCardSuccess(response.data.card))
      .catch(error => fetchCardFailure(error)));

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
  fetchCardEpic,
  fetchTypesEpic,
  searchCardsEpic,
);
