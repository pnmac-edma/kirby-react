import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

export const history = createBrowserHistory();

const BrowserRouter = props => {
  return <Router history={history} children={props.children} />;
};

export default BrowserRouter;
