// gathers all reducers and sagas to make a rootSaga and rootReducer
import viewRequestsReducer, { viewRequestsSagas } from './ViewRequests/index';
import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

function* rootSaga() {
  yield all([viewRequestsSagas]);
}

const rootReducer = combineReducers({
  sentRequestsReducer
});

export { rootSaga, rootReducer };
