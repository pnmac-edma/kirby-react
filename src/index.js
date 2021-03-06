import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BrowserRouter from './BrowserRouter';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import store from './setupStore';

export const history = createBrowserHistory();

const app = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
