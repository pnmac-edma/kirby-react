import React from 'react';
import Splash from '../../../Presentational/Splash';
import TableSectionContainer from '../../SearchResults/TableSection/TableSection-Container';
import TableSkeleton from '../../SearchResults/TableSkeleton/TableSkeleton';

const SearchResults = ({
  searchResultCopy,
  isLoading,
  displaySearchResult
}) => {
  return (
    <>
      {isLoading ? (
        <TableSkeleton />
      ) : displaySearchResult ? (
        <TableSectionContainer />
      ) : null}
      {!searchResultCopy.length ? <Splash /> : null}
    </>
  );
};

export default SearchResults;
