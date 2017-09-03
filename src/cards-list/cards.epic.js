import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs';
import { combineEpics } from 'redux-observable';
import { FETCH_CARDS_REQUEST, SEARCH_CARDS_REQUEST } from './types';
import { fetchCardsSuccess, fetchCardsFailure, searchCardsSuccess, searchCardsFailure } from './actions';

const getCards = (action, keyword = '') => {
  if (keyword === '') {
    return ajax.getJSON(`https://api.magicthegathering.io/v1/cards?page=${action.page}&pageSize=${action.pageSize}`);
  } else {
    return ajax.getJSON(`https://api.magicthegathering.io/v1/cards?page=${action.page}&pageSize=${action.pageSize}&name=${keyword}`);
  }
};

const fetchCardsEpic = action$ =>
  action$.ofType(FETCH_CARDS_REQUEST)
    .mergeMap((action) => {
      return getCards(action)
        .map((response) => {
          return fetchCardsSuccess(response.cards)
        })
        .catch(errors => fetchCardsFailure(errors))
    });

const searchCardsEpic = action$ =>
  action$.ofType(SEARCH_CARDS_REQUEST)
    .mergeMap((action) => {
      return getCards(action, action.keyword)
        .map((response) => {
          return searchCardsSuccess(response.cards)
        })
        .catch(errors => searchCardsFailure)
    });

export default combineEpics(
  fetchCardsEpic,
  searchCardsEpic
)