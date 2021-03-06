import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';
// @ts-ignore
import { AnimatedSwitch } from 'react-router-transition';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import Splash from '../../../Presentational/Splash';
import AppBar from '../AppBar/AppBar';
import RequestsInbox from '../../ViewRequests/RequestsInbox/RequestsInbox';
import SearchContainer from '../Search/Search';
import SentRequests from '../../ViewRequests/SentRequests/SentRequests';
import SearchResults from '../../SearchResults/SearchResults';
import RequestAsset from '../../RequestAssets/RequestAsset/RequestAsset';
import ArchivedRequests from '../../ViewRequests/ArchivedRequests/ArchivedRequests';
import RequestDetailsDatabase from '../../ViewRequests/RequestDetailsDatabase/RequestDetailsDatabase';
import RequestDetailsAccess from '../../ViewRequests/RequestDetailsAccess/RequestDetailsAccess';
import RequestDetailsJob from '../../ViewRequests/RequestDetailsJob/RequestDetailsJob';
import NewJob from '../../Hydration/NewJob/NewJob';
import ViewJobs from '../../Hydration/ViewJobs/ViewJobs';
import NewDestination from '../../Hydration/NewDestination/NewDestination';
import Governance from '../../Governance/Governance';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    overflowY: 'scroll',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.type === 'light' ? color.g50 : color.g900,
    alignItems: 'stretch',
    width: `calc(100% - ${theme.spacing(7)}px)`,
    height: '100vh',
    color: theme.palette.type === 'light' ? color.black : color.white
  }
}));

const GovernorRoute = ({ component: Component, role, ...rest }: any) => (
  <Route
    {...rest}
    render={props =>
      role.isGovernor ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const GovernorOrApproverRoute = ({
  component: Component,
  role,
  ...rest
}: any) => (
  <Route
    {...rest}
    render={props =>
      role.isGovernor || role.isApprover ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const PageWrapper = () => {
  const classes = useStyles();

  const isSearchClicked = useSelector(
    ({ searchResult }: any) => searchResult.isSearchClicked
  );
  const requestListType = useSelector(
    ({ viewRequests }: any) => viewRequests.requestListType
  );
  const role = useSelector(({ currentUser }: any) => currentUser.role);

  const curPath = useLocation().pathname;

  const hydrationFormikRef = useRef(null);

  return (
    <div className={`${classes.pageContainer} Page-container`}>
      {curPath === '/hydration/new-job' ? (
        <AppBar hydration hydrationFormikRef={hydrationFormikRef} />
      ) : curPath === '/' ? (
        <AppBar home />
      ) : (
        <AppBar />
      )}

      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        {/* hosted version lands users at index.html */}
        <Route exact path="/index.html" component={Splash} />
        <Route exact path="/" component={Splash} />
        {/* search pages */}
        <Route path="/search/access" component={RequestAsset} />
        <Route path="/search" component={SearchResults} />
        {/* hydration pages */}
        <Route path="/hydration/new-destination" component={NewDestination} />
        <Route
          path="/hydration/new-job"
          render={() => <NewJob hydrationFormikRef={hydrationFormikRef} />}
        />
        <Route path="/hydration/view-jobs" component={ViewJobs} />
        {/* requests pages */}
        <GovernorOrApproverRoute
          exact
          path="/requests"
          role={role}
          component={RequestsInbox}
        />
        <Route path="/requests/sent" component={SentRequests} />
        <GovernorOrApproverRoute
          path="/requests/archive"
          role={role}
          component={ArchivedRequests}
        />
        <Route
          path="/requests/:id/add-database"
          render={props => (
            <RequestDetailsDatabase
              {...props}
              requestListType={requestListType}
            />
          )}
        />
        <Route
          path="/requests/:id/access-database"
          render={props => (
            <RequestDetailsAccess
              {...props}
              requestListType={requestListType}
            />
          )}
        />
        <Route
          path="/requests/:id/new-job"
          render={props => (
            <RequestDetailsJob {...props} requestListType={requestListType} />
          )}
        />
        {/* Governors Pages */}
        <GovernorRoute
          path="/governance/governors"
          role={role}
          component={Governance}
        />
        <GovernorRoute
          path="/governance/sensitivity-levels"
          role={role}
          component={Governance}
        />
        <GovernorRoute
          path="/governance/business-owners"
          role={role}
          component={Governance}
        />
      </AnimatedSwitch>

      {isSearchClicked ? <SearchContainer /> : null}
    </div>
  );
};

export default PageWrapper;
