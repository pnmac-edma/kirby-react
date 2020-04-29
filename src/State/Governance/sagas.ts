import * as types from './types';
import { takeEvery, put, call } from 'redux-saga/effects';
import { getDomainOwners, getSensitivityLevels, getGovernors } from './api';


export function* workDomainOwners() {
  try {
    const response = yield call(getDomainOwners);
    yield put({
      type: types.DOMAIN_OWNERS_REQUEST_SUCCESS,
      domainOwners: response
    });
  } catch (error) {
    yield put({ type: types.DOMAIN_OWNERS_REQUEST_FAILURE, message: error });
  }
}

export function* worksensitivityLevels() {
  try {
    const response = yield call(getSensitivityLevels);
    yield put({
      type: types.SENSITIVITY_LEVELS_REQUEST_SUCCESS,
      sensitivity: response
    });
  } catch (error) {
    yield put({
      type: types.SENSITIVITY_LEVELS_REQUEST_FAILURE,
      message: error
    });
  }
}

export function* workGovernors() {
  try {
    const response = yield call(getGovernors);
    yield put({ type: types.GOVERNORS_REQUEST_SUCCESS, governors: response });
  } catch (error) {
    yield put({ type: types.GOVERNORS_REQUEST_FAILURE, message: error });
  }
}

export default function* watchDomainOwners() {
  yield takeEvery(types.DOMAIN_OWNERS_REQUEST_FETCH, workDomainOwners);
  yield takeEvery(types.SENSITIVITY_LEVELS_REQUEST_FETCH, worksensitivityLevels);
  yield takeEvery(types.GOVERNORS_REQUEST_FETCH, workGovernors);
}
