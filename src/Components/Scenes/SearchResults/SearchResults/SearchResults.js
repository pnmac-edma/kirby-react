import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Splash from '../../../Presentational/Splash';
import TableSectionContainer from '../../SearchResults/TableSection/TableSection-Container';
import TableSkeleton from '../../SearchResults/TableSkeleton/TableSkeleton';

const searchResultsStyle = makeStyles(theme => ({
  // not certain if we will want or need separate styles at the moment
  searchResults: {}
}));

const SearchResults = ({
  searchResultCopy,
  isLoading,
  displaySearchResult
}) => {
  const classes = searchResultsStyle();

  return (
    <div className={classes.searchResults}>
      {isLoading ? (
        <TableSkeleton />
      ) : displaySearchResult ? (
        <TableSectionContainer />
      ) : null}
      {!searchResultCopy.length ? <Splash /> : null}
    </div>
  );
};

export default SearchResults;
