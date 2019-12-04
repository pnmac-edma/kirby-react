import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
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

const PageWrapper = ({ isSearchClicked }) => {
  const classes = pageContainerStyle();
  const samlResponse = useQuery('SAMLResponse');

  useEffect(() => {
    if (samlResponse) {
      try {
        const samlToken = atob(samlResponse);
        console.log(samlToken);
        // TODO: dispatch Abby's action for cognito auth
      } catch (error) {
        // TODO: consider how to handle bad SAML redirects
        console.log(error.message);
      }
    }
  }, [samlResponse]);

  return (
    <div className={classes.pageContainer}>
      <AppBarContainer />

      <Switch>
        <Route exact path="/" component={Splash} />
        {/* search pages */}
        <Route path="/search/access" component={RequestAssetContainer} />
        <Route path="/search" component={SearchResultsContainer} />
        {/* requests pages - will be implemented and hooked in soon */}
        <Route exact path="/requests" component={RequestsInboxContainer} />
        <Route path="/requests/archive" component={null} />
        <Route path="/requests/sent" component={SentRequestsContainer} />
      </Switch>

      {isSearchClicked ? <SearchContainer /> : null}
    </div>
  );
};

export default PageWrapper;
