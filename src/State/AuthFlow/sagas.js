import * as types from './types';
import { takeEvery, put, call } from 'redux-saga/effects';
import { authenticate, postUserEvaluate } from './api';

export function* workAuthenticate(action) {
  try {
    const response = yield call(authenticate, action.payload);
    yield put({ type: types.AUTHENTICATE_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.AUTHENTICATE_FAILURE, payload: error });
  }
}

export function* workUserEvaluate() {
  try {
    const response = yield call(postUserEvaluate);
    yield put({ type: types.USER_EVALUATE_SUCCESS, response: response });
  } catch (error) {
    yield put({ type: types.USER_EVALUATE_FAILURE, error: error });
  }
}

export default function* watchAuthFlow() {
  yield takeEvery(types.AUTHENTICATE_FETCH, workAuthenticate);
  yield takeEvery(types.USER_EVALUATE_FETCH, workUserEvaluate);
}
