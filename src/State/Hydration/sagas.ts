import * as types from './types';
import { takeEvery, put, call, select } from 'redux-saga/effects';
import {
  getSourceTiles,
  getDestinations,
  getDestinationsDropdown,
  newDestination
} from './api';
import { getCreatedByEmail } from '../../Selectors/sagaSelectors';

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

export function* workNewDestination(action: any) {
  const {
    description,
    domain,
    justification,
    name,
    sensitivity
  } = action.values;
  const createdByEmail = yield select(getCreatedByEmail);
  try {
    const response = yield call(
      newDestination,
      name,
      sensitivity,
      domain,
      description,
      justification,
      createdByEmail
    );
    yield put({
      type: types.NEW_DESTINATION_REQUEST_SUCCESS,
      newDestination: response
    });
  } catch (error) {
    yield put({ type: types.NEW_DESTINATION_REQUEST_FAILURE, message: error });
  }
}

export default function* watchHydration() {
  yield takeEvery(types.SOURCE_TILES_REQUESTS_FETCH, workSourceTiles);
  yield takeEvery(types.DESTINATIONS_REQUEST_FETCH, workDestinations);
  yield takeEvery(
    types.DESTINATIONS_DROPDOWN_REQUEST_FETCH,
    workDestinationsDropDown
  );
  yield takeEvery(types.NEW_DESTINATION_REQUEST_FETCH, workNewDestination);
}
