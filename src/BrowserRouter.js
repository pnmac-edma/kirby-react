import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router';

export const history = createHistory();

const BrowserRouter = props => {
  return <Router history={history} children={props.children} />;
};

export default BrowserRouter;
