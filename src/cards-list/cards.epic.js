import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs';
import { combineEpics } from 'redux-observable';
import { FETCH_CARDS_REQUEST } from './types';
import { fetchCardsSuccess, fetchCardsFailure } from './actions';

const getCards = (action) => {
  return ajax.getJSON(`https://api.magicthegathering.io/v1/cards?page=${action.page}&pageSize=${action.pageSize}`);
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

export default combineEpics(
  fetchCardsEpic
)