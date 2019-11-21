import { all } from 'redux-saga/effects';
import handleSearch from './handleSearch';
import requestAsset from './requestAsset';
import { viewRequestsSagas } from '../State/ViewRequests/index';

export default function* rootSaga() {
  yield all([handleSearch(), requestAsset(), viewRequestsSagas]);
}
