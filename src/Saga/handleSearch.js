import { takeEvery, put, select, call } from 'redux-saga/effects';
import * as types from './../Actions/types';
import {
  getSearchInput,
  getSortBy,
  getFilterQueries
} from './../Selectors/sagaSelectors';
import { searchResultApiCall } from '../Api/searchResult';

function* handleSearch() {
  const searchInput = yield select(getSearchInput);
  if (searchInput) {
    try {
      const response = yield call(searchResultApiCall, searchInput);
      yield put({ type: types.SEARCH_RESULT_SUCCESS, payload: response });
    } catch (error) {
      yield put({ type: types.SEARCH_RESULT_FAILURE, payload: error });
    }
  }
}

function* handleSearchSort(action) {
  const searchInput = yield select(getSearchInput);
  const sortBy = yield select(getSortBy);
  const sortDirection = sortBy[action.payload] === 'asc' ? 'desc' : 'asc';

  if (searchInput) {
    let searchResult = yield call(
      searchResultApiCall,
      searchInput,
      sortDirection,
      action
    );
    yield put({
      type: types.SEARCH_RESULT_SORT_SUCCESS,
      searchResult: searchResult,
      columnName: action.payload,
      sortDirection: sortDirection
    });
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
  yield takeEvery(types.SEARCH_RESULT_SORT_REQUEST, handleSearchSort);
  yield takeEvery(types.HANDLE_FILTER_REQUEST, handleSearchFilter);
  yield takeEvery(types.HANDLE_REMOVE_CHIP, handleSearchFilter);
}
