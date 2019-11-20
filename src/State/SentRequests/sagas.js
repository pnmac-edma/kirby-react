import * as types from './types';

function* handleSentRequests() {
  try {
    const response = yield call(searchResultApiCall, searchInput);
    yield put({ type: types.SENT_REQUESTS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.SENT_REQUESTS_FAILURE, payload: error });
  }
}

export default function* actionWatcher() {
  yield takeEvery(types.SENT_REQUESTS_FETCH, handleSentRequests);
}
