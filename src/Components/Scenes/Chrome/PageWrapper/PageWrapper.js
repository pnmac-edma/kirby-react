import React from 'react';
import { Route, useLocation } from 'react-router-dom';
// @ts-ignore
import { AnimatedSwitch } from 'react-router-transition';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import Splash from '../../../Presentational/Splash';
import AppBarContainer from '../AppBar/AppBar-Container';
import RequestsInboxContainer from '../../ViewRequests/RequestsInbox/RequestsInbox-Container';
import SearchContainer from '../Search/Search-Container';
import SearchResultsContainer from '../../SearchResults/SearchResults-Container';
import RequestAssetContainer from '../../RequestAssets/RequestAsset/RequestAsset-Container';
import SentRequestsContainer from '../../ViewRequests/SentRequests/SentRequests-Container';
import NewJob from '../../Hydration/NewJob/NewJob';
import NewDestinationContainer from '../../Hydration/NewDestination/NewDestination-Container';

const pageContainerStyle = makeStyles(theme => ({
  pageContainer: {
    overflowY: 'scroll',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.type,
    alignItems: 'stretch',
    width: `calc(100% - ${theme.spacing(7)}px)`,
    height: '100vh',
    color: theme.palette.type === 'light' ? color.black : color.white
  }
}));

const PageWrapper = ({
  isSearchClicked,
  authenticateFetch,
  sessionToken,
  newJobName,
  themeToggle
}) => {
  const classes = pageContainerStyle();
  const curPath = useLocation().pathname;

  return (
    <div className={classes.pageContainer}>
      {curPath === '/hydration/new-job' ? (
        <AppBarContainer hydration jobName={newJobName} />
      ) : (
        <AppBarContainer themeToggle={themeToggle} />
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
        <Route path="/search/access" component={RequestAssetContainer} />
        <Route path="/search" component={SearchResultsContainer} />
        {/* hydration pages */}
        <Route
          path="/hydration/new-destination"
          component={NewDestinationContainer}
        />
        <Route path="/hydration/new-job" component={NewJob} />
        {/* requests pages */}
        <Route exact path="/requests" component={RequestsInboxContainer} />
        <Route path="/requests/archive" component={null} />
        <Route path="/requests/sent" component={SentRequestsContainer} />
      </AnimatedSwitch>

      {isSearchClicked ? <SearchContainer /> : null}
    </div>
  );
};

export default PageWrapper;
