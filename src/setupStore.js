import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';
import { rootReducer, rootSaga } from './State/';
import initialState from './State/initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

// Attempts to load in the state from session storage if it's there
// (https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
const loadState = () => {
  try {
    const sessionState = sessionStorage.getItem('kirbyState');
    return sessionState !== null ? JSON.parse(sessionState) : undefined;
  } catch (error) {
    return undefined;
  }
};

// Persists the state to session storage to avoid losing it on refresh
const saveState = state => {
  try {
    const sessionState = JSON.stringify(state);
    sessionStorage.setItem('kirbyState', sessionState);
  } catch (error) {
    // Prevents a crash, but state save failures are not critical to handle further
  }
};

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
