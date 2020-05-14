import * as types from './types';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  getUserRequests,
  getArchivedRequests,
  getApproverRequests,
  getGovernanceRequests,
  postReqDecision
} from './api';

export function* workUserRequests(action) {
  try {
    const response = yield call(getUserRequests, action.payload);
    yield put({ type: types.USER_REQUESTS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.USER_REQUESTS_FAILURE, payload: error });
  }
}

export function* workArchivedRequests(action) {
  try {
    const response = yield call(getArchivedRequests, action.payload);
    yield put({ type: types.ARCHIVED_REQUESTS_SUCCESS, archived: response });
  } catch (error) {
    yield put({ type: types.ARCHIVED_REQUESTS_FAILURE, payload: error });
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

export function* workReqDecisionRequest(action) {
  const { decision, ids } = action;
  try {
    const response = yield call(postReqDecision, decision, ids);
    yield put({ type: types.REQ_DECISION_REQUEST_SUCCESS, response: response });
  } catch (error) {
    yield put({ type: types.REQ_DECISION_REQUEST_FAILURE, error: error });
  }
}

export default function* watchViewRequests() {
  yield takeEvery(types.USER_REQUESTS_FETCH, workUserRequests);
  yield takeEvery(types.ARCHIVED_REQUESTS_FETCH, workArchivedRequests);
  yield takeEvery(types.APPROVER_REQUESTS_FETCH, workApproverRequests);
  yield takeEvery(types.GOVERNANCE_REQUESTS_FETCH, workGovernanceRequests);
  yield takeEvery(types.REQ_DECISION_REQUEST_FETCH, workReqDecisionRequest);
}
