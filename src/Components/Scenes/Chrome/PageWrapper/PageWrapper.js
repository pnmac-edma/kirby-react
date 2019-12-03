import React from 'react';
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
import HydrationChrome from '../../Hydration/HydrationChrome';

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

  return (
    <div className={classes.pageContainer}>
      <AppBarContainer />

      <Switch>
        <Route exact path="/" component={Splash} />
        {/* search pages */}
        <Route path="/search/access" component={RequestAssetContainer} />
        <Route path="/search" component={SearchResultsContainer} />
        {/* hydration pages */}
        <Route path="/hydration/add-transform" component={HydrationChrome} />
        {/* requests pages - will be implemented and hooked in soon */}
        <Route exact path="/requests" component={RequestsInboxContainer} />
        <Route path="/requests/sent" component={SentRequestsContainer} />
        <Route path="/requests/archive" component={null} />
      </Switch>

      {isSearchClicked ? <SearchContainer /> : null}
    </div>
  );
};

export default PageWrapper;
