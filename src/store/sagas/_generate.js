import { takeLeading, put, call } from 'redux-saga/effects';

export const generateWatcher = ({ actionType, service, take = takeLeading }) =>
  function* () {
    const { WATCH } = actionType;
    yield take(WATCH, ({ payload }) => generateWorker({ payload, actionType, service }));
  };

const generateWorker = ({ payload, actionType, service }) =>
  (function* () {
    const { LOAD, SUCCESS, FAIL } = actionType;
    try {
      yield put({ type: LOAD });
      const response = service ? yield call(service, payload) : payload;
      yield put({ type: SUCCESS, response });
      console.log(`response`, response);
      if (payload?.afterSuccess) {
        yield call(payload.afterSuccess, { response });
      }
    } catch (error) {
      yield put({ type: FAIL });
      if (payload?.afterFail) {
        yield call(payload.afterFail, { error });
      }
    }
  })();
