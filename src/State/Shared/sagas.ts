import * as types from './types';
import { takeEvery, put, call } from 'redux-saga/effects';
import { getDomains } from './api';

export function* workGetDomains() {
  try {
    const response = yield call(getDomains);
    yield put({ type: types.GET_DOMAINS_REQUEST_SUCCESS, domains: response });
  } catch (error) {
    yield put({ type: types.GET_DOMAINS_REQUEST_FAILURE, message: error });
  }
}

export default function* watchShared() {
  yield takeEvery(types.GET_DOMAINS_REQUEST_FETCH, workGetDomains);
}
