import { all } from 'redux-saga/effects';
import handleSearch from './handleSearch';
import requestAsset from './requestAsset';
import requestInboxAlert from './requestInboxAlert';

export default function* rootSaga() {
  yield all([handleSearch(), requestAsset(), requestInboxAlert()]);
}
