import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs';
import { combineEpics } from 'redux-observable';
import { FETCH_CARDS } from './types';
import { fetchCardsSuccess, fetchCardsFailure } from './actions';

const fetchCardsEpic = action$ =>
  action$.ofType(FETCH_CARDS)
    .mergeMap(() => {
      return ajax.getJSON('https://api.magicthegathering.io/v1/cards')
        .map(response => fetchCardsSuccess(response.cards))
        .catch(errors => fetchCardsFailure(errors))
    });

export default combineEpics(
  fetchCardsEpic
)