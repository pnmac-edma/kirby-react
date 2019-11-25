/*
If we implement this structure, this would gather all reducers and sagas to make a rootSaga and rootReducer
for now, we are just importing our reducers and sagas into the current rootSaga and rootReducer

Below is an example implmentation
*/
// import viewRequestsReducer, { viewRequestsSagas } from './ViewRequests/index';
// import { all } from 'redux-saga/effects';
// import { combineReducers } from 'redux';

// function* rootSaga() {
//   yield all([viewRequestsSagas]);
// }

// const rootReducer = combineReducers({
//   viewRequests
// });

// export { rootSaga, rootReducer };
