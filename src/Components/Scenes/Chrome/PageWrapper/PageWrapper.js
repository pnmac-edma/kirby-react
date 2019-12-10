import React, { useEffect, useState } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import Splash from '../../../Presentational/Splash';
import AppBarContainer from '../AppBar/AppBar-Container';
import RequestsInboxContainer from '../../ViewRequests/RequestsInbox/RequestsInbox-Container';
import SearchContainer from '../Search/Search-Container';
import SearchResultsContainer from '../../SearchResults/SearchResults/SearchResults-Container';
import RequestAssetContainer from '../../RequestAssets/RequestAsset/RequestAsset-Container';
import SentRequestsContainer from '../../ViewRequests/SentRequests/SentRequests-Container';
import NewJobContainer from '../../Hydration/NewJob/NewJob/NewJob-Container';
import { useQuery } from '../../../../Hooks/customHooks';
import { isEmptyObject } from '../../../../Utilities/utils';

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

const PageWrapper = props => {
  const { isSearchClicked, sessionToken, error, authenticateFetch } = props;
  const classes = pageContainerStyle();
  const samlResponse = useQuery('SAMLResponse');
  const curPath = useLocation().pathname;

  const [isRedirecting, setIsRedirecting] = useState(true);
  // This functionality could be useful if wrapped in an error view button or link,
  // so in anticipation, it's set up as a function for now
  const redirect = () => {
    setIsRedirecting(true);
    window.location.replace('https://pennymac.onelogin.com/portal/');
  };

  // Case 1: there is a SAML response but no session token, so authenticate real quick
  // Case 2: there is neither a SAML response nor a session token, so redirect to OneLogin
  // Case 3: there may or may not be a SAML response,
  //         but there is a session token, so relax until an hour later
  //         when we get a 4xx code from some request, then redirect
  useEffect(() => {
    if (samlResponse && !sessionToken) {
      setIsRedirecting(false);
      authenticateFetch(samlResponse);
    } else if (!sessionToken) {
      redirect();
    } else {
      setIsRedirecting(false);
    }
  }, [samlResponse, authenticateFetch, sessionToken]);

  const authenticatedContent = (
    <>
      {curPath === '/hydration/new-job' ? null : <AppBarContainer />}

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
        <Route path="/hydration/new-job" component={NewJobContainer} />
        {/* requests pages */}
        <Route exact path="/requests" component={RequestsInboxContainer} />
        <Route path="/requests/archive" component={null} />
        <Route path="/requests/sent" component={SentRequestsContainer} />
      </AnimatedSwitch>

      {isSearchClicked ? <SearchContainer /> : null}
    </>
  );

  // TODO: replace <span> with proper error splash once it's landed
  return (
    <div className={classes.pageContainer}>
      {!isRedirecting ? (
        isEmptyObject(error) ? (
          authenticatedContent
        ) : (
          <span>auth error placeholder</span>
        )
      ) : null}
    </div>
  );

  // Uncomment to ignore auth
  // return (
  //   <div className={classes.pageContainer}>
  //     authenticatedContent
  //   </div>
  // );
};

export default PageWrapper;
