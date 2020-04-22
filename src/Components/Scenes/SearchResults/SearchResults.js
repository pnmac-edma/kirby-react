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
    searchedInput,
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

  const footerButtonText = selected
    ? `${selected.length} request${selected.length !== 1 ? 's' : ''} selected`
    : '';

  return (
    <TableWrapper
      isLoading={isLoading}
      setTitleText={() => `Search Results for ${searchedInput}`}
      filter={['Name', 'Domain', 'Owner', 'Date Created']}
      selected={selected}
      columns={columns}
      data={searchResult ? searchResult.results : searchResult}
      searchedInput={searchedInput}
      setToggleCheckbox={setToggleSearchCheckbox}
      setToggleAllCheckbox={setToggleSearchAllCheckbox}
      footerButtonText={footerButtonText}
      footerButtonLink="/search/access"
      setFirstColLink={id => console.log(`request ${id} clicked`)}
      setFooterButtonClick={() =>
        requestAssetsClick(selected, searchResult.results)
      }
    />
  );
};

export default SearchResults;
