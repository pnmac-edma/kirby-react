import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBarContainer from '../AppBar/AppBar-Container';
import Splash from '../../../Presentational/Splash';
import InboxContainer from '../../ViewRequests/InboxContainer';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import SearchContainer from '../Search/Search-Container';
import SearchResultsContainer from '../../SearchResults/SearchResults/SearchResults-Container';
import RequestAssetContainer from '../../RequestAssets/RequestAsset/RequestAsset-Container';

const pageContainerStyle = makeStyles(theme => ({
  pageContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: theme.palette.type === 'light' ? 'dark' : 'light',
    width: 'calc(100% - 56px)', // width of side nav?
    height: '100vh',
    color: color.white
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
        <Route exact path="/search" component={SearchResultsContainer} />
        <Route path="/search/access" component={RequestAssetContainer} />
        {/* requests pages - will be implemented and hooked in soon */}
        <Route exact path="/requests" component={InboxContainer} />
        <Route path="/requests/archive" component={null} />
        <Route path="/requests/sent" component={null} />
      </Switch>

      {isSearchClicked ? <SearchContainer /> : null}
    </div>
  );
};

export default PageWrapper;
