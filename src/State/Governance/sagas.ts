import * as types from './types';
import { takeEvery, put, call } from 'redux-saga/effects';
import { getDomainOwners } from './api';

export function* workDomainOwners() {
  try {
    const response = yield call(getDomainOwners);
    console.log(response);
    yield put({
      type: types.DOMAIN_OWNERS_REQUEST_SUCCESS,
      domainOwners: response
    });
  } catch (error) {
    yield put({ type: types.DOMAIN_OWNERS_REQUEST_FAILURE, message: error });
  }
}

export default function* watchDomainOwners() {
  yield takeEvery(types.DOMAIN_OWNERS_REQUEST_FETCH, workDomainOwners);
}
