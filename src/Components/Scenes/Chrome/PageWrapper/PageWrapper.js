import React from 'react';
import AppBarContainer from '../AppBar/AppBar-Container';
import Splash from '../../../Presentational/Splash';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import TableSectionContainer from '../../SearchResults/TableSection/TableSection-Container';
import TableSkeleton from '../../SearchResults/TableSkeleton/TableSkeleton';
import SearchContainer from '../Search/Search-Container';

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

const PageWrapper = props => {
  const {
    searchResultCopy,
    isLoading,
    displaySearchResult,
    isSearchClicked
  } = props;
  const classes = pageContainerStyle();
  return (
    <div className={classes.pageContainer}>
      <AppBarContainer />
      {isLoading ? (
        <TableSkeleton />
      ) : displaySearchResult ? (
        <TableSectionContainer />
      ) : null}
      {!searchResultCopy.length > 0 ? <Splash /> : null}
      {isSearchClicked ? <SearchContainer /> : null}
    </div>
  );
};

export default PageWrapper;
