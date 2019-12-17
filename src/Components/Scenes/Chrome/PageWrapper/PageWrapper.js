import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import AppBarContainer from '../AppBar/AppBar-Container';
import Splash from '../../../Presentational/Splash';
import RequestsInboxContainer from '../../ViewRequests/RequestsInbox/RequestsInbox-Container';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import SearchContainer from '../Search/Search-Container';
import SearchResultsContainer from '../../SearchResults/SearchResults/SearchResults-Container';
import RequestAssetContainer from '../../RequestAssets/RequestAsset/RequestAsset-Container';
import SentRequestsContainer from '../../ViewRequests/SentRequests/SentRequests-Container';
import { useQuery } from '../../../../Hooks/customHooks';
import NewJobContainer from '../../Hydration/NewJob/NewJob-Container';

const pageContainerStyle = makeStyles(theme => ({
  pageContainer: {
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
  newJobName
}) => {
  const classes = pageContainerStyle();
  const samlResponse = useQuery('SAMLResponse');
  const curPath = useLocation().pathname;

  // Case 1: there is a SAML response but no session token, so authenticate real quick
  // Case 2: (not seen here) there may or may not be a SAML response,
  //         but there is a session token, so relax until an hour later
  //         when we get a 4xx code from some request, then redirect
  // Case 3: there is neither a SAML response nor a session token, so redirect to OneLogin
  useEffect(() => {
    if (samlResponse && !sessionToken) {
      authenticateFetch(samlResponse);
    } else if (!sessionToken) {
      window.location.replace('https://pennymac.onelogin.com/portal/');
    }
  }, [samlResponse, authenticateFetch, sessionToken]);

  return (
    <div className={classes.pageContainer}>
      {curPath === '/hydration/new-job' ? (
        <AppBarContainer hydration jobName={newJobName} />
      ) : (
        <AppBarContainer />
      )}

      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={Splash} />
        {/* search pages */}
        <Route path="/search/access" component={RequestAssetContainer} />
        <Route path="/search" component={SearchResultsContainer} />
        {/* hydration pages */}
        <Route path="/hydration/new-job" component={NewJobContainer} />
        {/* requests pages - will be implemented and hooked in soon */}
        <Route exact path="/requests" component={RequestsInboxContainer} />
        <Route path="/requests/archive" component={null} />
        <Route path="/requests/sent" component={SentRequestsContainer} />
      </AnimatedSwitch>

      {isSearchClicked ? <SearchContainer /> : null}
    </div>
  );
};

export default PageWrapper;
