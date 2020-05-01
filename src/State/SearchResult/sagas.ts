import { takeEvery, put, call } from 'redux-saga/effects';
import * as types from './types';
import { searchResultApiCall } from './api';

function* handleSearch(action: any) {
  const searchInput = action.payload || '';

  try {
    const response = yield call(searchResultApiCall, searchInput);
    yield put({ type: types.SEARCH_RESULT_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.SEARCH_RESULT_FAILURE, payload: error });
  }
}

export default function* actionWatcher() {
  yield takeEvery(types.SEARCH_RESULT_REQUEST, handleSearch);
}
