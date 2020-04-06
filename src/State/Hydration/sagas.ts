import * as types from './types';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  getSourceTiles,
  getDestinations,
  getDestinationsDropdown
} from './api';

export function* workSourceTiles() {
  try {
    const response = yield call(getSourceTiles);
    yield put({
      type: types.SOURCE_TILES_REQUESTS_SUCCESS,
      sourceTiles: response
    });
  } catch (error) {
    yield put({ type: types.SOURCE_TILES_REQUESTS_FAILURE, message: error });
  }
}

export function* workDestinations() {
  try {
    const response = yield call(getDestinations);
    yield put({
      type: types.DESTINATIONS_REQUEST_SUCCESS,
      destinations: response
    });
  } catch (error) {
    yield put({ type: types.DESTINATIONS_REQUEST_FAILURE, message: error });
  }
}

export function* workDestinationsDropDown() {
  try {
    const response = yield call(getDestinationsDropdown);
    yield put({
      type: types.DESTINATIONS_DROPDOWN_REQUEST_SUCCESS,
      destinations: response
    });
  } catch (error) {
    yield put({
      type: types.DESTINATIONS_DROPDOWN_REQUEST_FAILURE,
      message: error
    });
  }
}

export default function* watchHydration() {
  yield takeEvery(types.SOURCE_TILES_REQUESTS_FETCH, workSourceTiles);
  yield takeEvery(types.DESTINATIONS_REQUEST_FETCH, workDestinations);
  yield takeEvery(
    types.DESTINATIONS_DROPDOWN_REQUEST_FETCH,
    workDestinationsDropDown
  );
}
