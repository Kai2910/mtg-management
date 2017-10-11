import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import Api from '../../api';
import {
  fetchCardFailure,
  fetchCardSuccess,
} from './actions';
import {
  FETCH_CARD_REQUEST,
} from './types';

const fetchCardEpic = action$ =>
  action$.ofType(FETCH_CARD_REQUEST)
    .mergeMap(action => Observable.fromPromise(Api.getCard(action.cardId))
      .map(response => fetchCardSuccess(response.data.card))
      .catch(error => fetchCardFailure(error)));

export default combineEpics(
  fetchCardEpic,
);