import { takeEvery, put, select, call } from 'redux-saga/effects';
import * as types from './types';
import {
  getSearchInput,
  getFilterQueries
} from '../../Selectors/sagaSelectors';
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

function* handleSearchFilter() {
  const searchInput = yield select(getSearchInput);
  const filterQueries = yield select(getFilterQueries);
  let searchFilter = yield call(
    searchResultApiCall,
    searchInput,
    filterQueries
  );

  yield put({
    type: types.HANDLE_FILTER_SUCCESS,
    payload: searchFilter
  });
}

export default function* actionWatcher() {
  yield takeEvery(types.SEARCH_RESULT_REQUEST, handleSearch);
  yield takeEvery(types.HANDLE_FILTER_REQUEST, handleSearchFilter);
  yield takeEvery(types.HANDLE_REMOVE_CHIP, handleSearchFilter);
}
