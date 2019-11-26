/*
  If we decide that the ducks structure is the way to go, 
  the store would be configured here (see example below)

  For now, the sagas and reducers from our duck will be 
  combined with the existing ones.
*/

// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { rootSaga, rootReducer } from '/.index';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const sagaMiddleware = createSagaMiddleware();
// const initialState = {};

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// );

// sagaMiddleware.run(rootSaga);
// export default store;
