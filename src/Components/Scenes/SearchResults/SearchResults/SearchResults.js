import React, { useEffect } from 'react';
import TableSectionContainer from '../../SearchResults/TableSection/TableSection-Container';
import TableSkeleton from '../../../Presentational/TableSkeleton/TableSkeleton';
import { useQuery } from '../../../../Hooks/customHooks';

const SearchResults = props => {
  const {
    isLoading,
    displaySearchResult,
    searchResultPageLoad,
    searchResultRequest
  } = props;
  const params = useQuery('params');

  useEffect(() => {
    if (params) {
      searchResultPageLoad(params);
      searchResultRequest();
    }
  }, [params, searchResultPageLoad, searchResultRequest]);

  return (
    <>
      {isLoading ? (
        <TableSkeleton />
      ) : displaySearchResult ? (
        <TableSectionContainer />
      ) : null}
    </>
  );
};

export default SearchResults;
