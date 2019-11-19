import { takeEvery, put, call } from 'redux-saga/effects';
import * as types from './../Actions/types';
import { requestAssetApiCall } from '../Api/requestAsset';

function* requestAsset() {
  try {
    const response = yield call(requestAssetApiCall);
    yield put({ type: types.EMPLOYEE_ASSETS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.EMPLOYEE_ASSETS_FAILURE });
  }
}

export default function* actionWatcher() {
  yield takeEvery(types.EMPLOYEE_ASSETS_REQUEST, requestAsset);
}
