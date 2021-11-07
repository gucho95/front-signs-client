import { all, fork } from 'redux-saga/effects';
import * as auth from './auth';
import * as media from './media';

const combineSagas = { ...auth, ...media };

export default function* rootSaga() {
  yield all(Object.values(combineSagas).map((saga) => fork(saga)));
}
