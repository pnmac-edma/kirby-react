import rootReducer from './Reducers';
import initialState from './Reducers/initialState';
import rootSaga from './Saga/';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './State/helpers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  loadState() || initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Save the state to session storage upon updates,
// but cap it at 1Hz :-)
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

sagaMiddleware.run(rootSaga);

export default store;
