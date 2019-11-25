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
  const query = useQuery('search');

  useEffect(() => {
    const params = query.get('params');

    if (params) {
      searchResultPageLoad(params);
      searchResultRequest();
    }
  }, []); //eslint-disable-line
  // Above suppression is to simply and clearly recreate `componentDidMount()`;
  // for more info see  https://github.com/facebook/create-react-app/issues/6880#issuecomment-485963251

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
