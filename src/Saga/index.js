import { all } from 'redux-saga/effects';
import handleSearch from './handleSearch';

export default function* rootSaga() {
  yield all([handleSearch()]);
}
