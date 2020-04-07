import * as types from './types';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  getUserRequests,
  getApproverRequests,
  getGovernanceRequests
} from './api';

export function* workUserRequests(action) {
  try {
    const response = yield call(getUserRequests, action.payload);
    yield put({ type: types.USER_REQUESTS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.USER_REQUESTS_FAILURE, payload: error });
  }
}

export function* workApproverRequests(action) {
  try {
    const response = yield call(getApproverRequests, action.payload);
    yield put({ type: types.APPROVER_REQUESTS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.APPROVER_REQUESTS_FAILURE, payload: error });
  }
}

export function* workGovernanceRequests(action) {
  try {
    const response = yield call(getGovernanceRequests, action.payload);
    yield put({ type: types.GOVERNANCE_REQUESTS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.GOVERNANCE_REQUESTS_FAILURE, payload: error });
  }
}

export default function* watchViewRequests() {
  yield takeEvery(types.USER_REQUESTS_FETCH, workUserRequests);
  yield takeEvery(types.APPROVER_REQUESTS_FETCH, workApproverRequests);
  yield takeEvery(types.GOVERNANCE_REQUESTS_FETCH, workGovernanceRequests);
}
