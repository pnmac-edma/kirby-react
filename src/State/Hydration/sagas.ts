import * as types from './types';
import { takeEvery, put, call } from 'redux-saga/effects';
import { getSourceTiles, getDestinations } from './api';

export function* handleSourceTiles() {
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

export function* handleDestinations() {
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

export default function* actionWatcher() {
  yield takeEvery(types.SOURCE_TILES_REQUESTS_FETCH, handleSourceTiles);
  yield takeEvery(types.DESTINATIONS_REQUEST_FETCH, handleDestinations);
}
