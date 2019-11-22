import * as types from './types';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  getUserRequests,
  getApproverRequests,
  getPendingRequests
} from './api';

function* handleUserRequests(action) {
  try {
    const response = yield call(getUserRequests, ...action.payload);
    yield put({ type: types.USER_REQUESTS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.USER_REQUESTS_FAILURE, payload: error });
  }
}

function* handleApproverRequests(action) {
  try {
    const response = yield call(getApproverRequests, action.payload);
    yield put({ type: types.APPROVER_REQUESTS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.APPROVER_REQUESTS_FAILURE, payload: error });
  }
}

function* handlePendingRequests(action) {
  try {
    const response = yield call(getPendingRequests, ...action.payload);
    yield put({ type: types.PENDING_REQUESTS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.PENDING_REQUESTS_FAILURE, payload: error });
  }
}

export default function* actionWatcher() {
  yield takeEvery(types.USER_REQUESTS_FETCH, handleUserRequests);
  yield takeEvery(types.APPROVER_REQUESTS_FETCH, handleApproverRequests);
  yield takeEvery(types.PENDING_REQUESTS_FETCH, handlePendingRequests);
}
