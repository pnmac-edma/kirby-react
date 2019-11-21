import rootReducer from './Reducers';
import initialState from './Reducers/initialState';
import rootSaga from './Saga/';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const logger = store => next => action => {
  console.log('CURRENT STATE:', store.getState());
  console.log('DISPATCHING:', action);
  let result = next(action);
  console.log('NEXT STATE:', store.getState());
  return result;
};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);
export default store;
