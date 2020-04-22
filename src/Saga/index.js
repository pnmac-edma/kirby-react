import { all } from 'redux-saga/effects';
import handleSearch from '../State/SearchResult/sagas';
import requestAsset from './requestAsset';
import viewRequestsSagas from '../State/ViewRequests/sagas';
import authFlowSagas from '../State/AuthFlow/sagas';
import hydrationSagas from '../State/Hydration/sagas';

export default function* rootSaga() {
  yield all([
    handleSearch(),
    requestAsset(),
    viewRequestsSagas(),
    authFlowSagas(),
    hydrationSagas()
  ]);
}
