import React from 'react';
import SearchInputContainer from '../SearchInput/SearchInput-Container';
import TableSectionContainer from '../TableSection/TableSection-Container';
import TableSkeleton from '../TableSkeleton/TableSkeleton';

const SearchResult = props => {
  const { isLoading, displaySearchResult } = props;
  return (
    <React.Fragment>
      <SearchInputContainer />
      {isLoading ? (
        <TableSkeleton />
      ) : displaySearchResult ? (
        <TableSectionContainer />
      ) : null}
    </React.Fragment>
  );
};

export default SearchResult;
