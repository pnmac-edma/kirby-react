import { takeEvery, put, call, select } from 'redux-saga/effects';
import * as types from './types';
import { getEmployees, makeRequest } from './api';
import {
  getRequestedFor,
  getJustification,
  getRequestAssets,
  getCreatedByEmail
} from '../../Selectors/sagaSelectors';

function* workRequestAsset() {
  try {
    const response = yield call(getEmployees);
    yield put({ type: types.GET_EMPLOYEES_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.GET_EMPLOYEES_FAILURE, payload: error });
  }
}

function* workMakeRequests() {
  const justification = yield select(getJustification);
  const requestAssets = yield select(getRequestAssets);
  const requestedFor = yield select(getRequestedFor);
  const createdByEmail = yield select(getCreatedByEmail);
  console.log('sgaga', requestAssets);
  try {
    const response = yield call(
      makeRequest,
      createdByEmail,
      requestAssets,
      justification,
      requestedFor
    );
    yield put({ type: types.MAKE_REQUESTS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.MAKE_REQUESTS_FAILURE, payload: error });
  }
}

export default function* watchRequestAsset() {
  yield takeEvery(types.GET_EMPLOYEES_FETCH, workRequestAsset);
  yield takeEvery(types.MAKE_REQUESTS_FETCH, workMakeRequests);
}
