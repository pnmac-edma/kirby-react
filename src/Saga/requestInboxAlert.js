import { takeEvery, put, call } from 'redux-saga/effects';
import * as types from '../Actions/types';
import { requestInboxAlertApiCall } from '../Api/requestInboxAlert';

function* requestInboxAlert() {
  try {
    const response = yield call(requestInboxAlertApiCall);
    yield put({ type: types.REQUEST_INBOX_ALERT_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.REQUEST_INBOX_ALERT_FAILURE, payload: error });
  }
}

export default function* actionWatcher() {
  yield takeEvery(types.REQUEST_INBOX_ALERT, requestInboxAlert);
}
