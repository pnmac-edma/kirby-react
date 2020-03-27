import * as types from './types';
import { takeEvery, put, call } from 'redux-saga/effects';
import { getSourceTiles } from './api';

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

export default function* actionWatcher() {
  yield takeEvery(types.SOURCE_TILES_REQUESTS_FETCH, handleSourceTiles);
}
