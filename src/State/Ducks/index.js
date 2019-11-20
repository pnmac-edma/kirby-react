// gathers all reducers and sagas to make a rootSaga and rootReducer
import sentRequestsReducer, { sentRequestsSagas } from './SentRequests';
import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

function* rootSaga() {
  yield all([sentRequestsSagas]);
}

const rootReducer = combineReducers({
  sentRequestsReducer
});

export { rootSaga, rootReducer };
