import { takeEvery, put, call } from 'redux-saga/effects';
import * as types from './../Actions/types';
import { getEmployees } from '../Api/requestAsset';

function* requestAsset() {
  try {
    const response = yield call(getEmployees);
    yield put({ type: types.GET_EMPLOYEES_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.GET_EMPLOYEES_FAILURE, payload: error });
  }
}

export default function* actionWatcher() {
  yield takeEvery(types.GET_EMPLOYEES_FETCH, requestAsset);
}
