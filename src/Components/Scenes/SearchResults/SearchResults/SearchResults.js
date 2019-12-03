import React, { useEffect } from 'react';
import Splash from '../../../Presentational/Splash';
import TableSectionContainer from '../../SearchResults/TableSection/TableSection-Container';
import TableSkeleton from '../../SearchResults/TableSkeleton/TableSkeleton';
import { useQuery } from '../../../../Hooks/customHooks';

const SearchResults = props => {
  const {
    searchResultCopy,
    isLoading,
    displaySearchResult,
    searchResultPageLoad,
    searchResultRequest
  } = props;
  const query = useQuery('search', 'params');

  useEffect(() => {
    if (query) {
      searchResultPageLoad(query);
      searchResultRequest();
    }
  }, [query, searchResultPageLoad, searchResultRequest]);

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
