import { all } from 'redux-saga/effects';
import handleSearch from './handleSearch';
import requestAsset from './requestAsset';

export default function* rootSaga() {
  yield all([handleSearch(), requestAsset()]);
}
