import { all, fork } from 'redux-saga/effects';
import * as auth from './auth';

const combineSagas = { ...auth };

export default function* rootSaga() {
  yield all(Object.values(combineSagas).map((saga) => fork(saga)));
}
