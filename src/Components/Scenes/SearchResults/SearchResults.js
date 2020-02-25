import React, { useEffect } from 'react';
import TableWrapper from '../../Presentational/Table/TableWrapper';
import { useQuery } from '../../../Hooks/customHooks';

const SearchResults = props => {
  const {
    isLoading,
    requestAssetsClick,
    searchResult,
    searchResultPageLoad,
    searchResultRequest,
    searchInput,
    selected,
    setToggleSearchCheckbox,
    setToggleSearchAllCheckbox
  } = props;
  const params = useQuery('params');

  const columns = [
    {
      name: 'Name',
      property: 'name'
    },
    {
      name: 'Domain',
      property: 'domain'
    },
    {
      name: 'Owner',
      property: 'owner'
    },
    {
      name: 'Date Created',
      property: 'createddate'
    }
  ];

  useEffect(() => {
    if (params) {
      searchResultPageLoad(params);
      searchResultRequest();
    }
  }, [params, searchResultPageLoad, searchResultRequest]);

  const footerButtonText = `${selected.length} request${
    selected.length !== 1 ? 's' : ''
  } selected`;

  return (
    <TableWrapper
      isLoading={isLoading}
      setTitleText={() => `Search Results for ${searchInput}`}
      filter={['Name', 'Domain', 'Owner', 'Date Created']}
      selected={selected}
      columns={columns}
      data={searchResult ? searchResult.results : searchResult}
      setToggleCheckbox={setToggleSearchCheckbox}
      setToggleAllCheckbox={setToggleSearchAllCheckbox}
      footerButtonText={footerButtonText}
      footerButtonLink="/search/access"
      handleRequestClick={id => console.log(`request ${id} clicked`)}
      handleFooterButtonClick={() =>
        requestAssetsClick(selected, searchResult.results)
      }
    />
  );
};

export default SearchResults;
