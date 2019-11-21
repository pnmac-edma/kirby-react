import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBarContainer from '../AppBar/AppBar-Container';
import Splash from '../../../Presentational/Splash';
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
    backgroundColor: theme.palette.type === 'light' ? 'dark' : 'light',
    width: '100%',
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
        <Route exact path="/search" component={SearchResultsContainer} />
        <Route path="/search/access" component={RequestAssetContainer} />
        <Route
          path="/requests/archive"
          component={null /* will implement later */}
        />
      </Switch>

      {isSearchClicked ? <SearchContainer /> : null}
    </div>
  );
};

export default PageWrapper;
