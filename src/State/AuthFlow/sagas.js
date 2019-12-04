import * as types from './types';
import { takeEvery, put, call } from 'redux-saga/effects';
import { authenticate } from './api';

export function* handleAuthenticate(action) {
  try {
    const response = yield call(authenticate, action.payload);
    yield put({ type: types.AUTHENTICATE_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.AUTHENTICATE_FAILURE, payload: error });
  }
}

export default function* actionWatcher() {
  yield takeEvery(types.AUTHENTICATE_FETCH, handleAuthenticate);
}
