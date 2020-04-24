import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Search } from '@material-ui/icons';
import TableWrapper from '../../Presentational/Table/TableWrapper';
import { useQuery } from '../../../Hooks/customHooks';
import {
  searchHandleInput,
  searchResultRequest
} from '../../../State/SearchResult/actions';

const SearchResults = props => {
  const {
    isLoading,
    requestAssetsClick,
    searchResult,
    searchedInput,
    selected,
    setToggleSearchCheckbox,
    setToggleSearchAllCheckbox
  } = props;
  const params = useQuery('params');

  const searchInput = useSelector(
    ({ searchResult }) => searchResult.searchInput
  );
  const dispatch = useDispatch();

  const history = useHistory();
  const urlWithParams = `/search?params=${searchInput}`;

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
      dispatch(searchResultRequest(searchInput));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const footerButtonText = selected
    ? `${selected.length} request${selected.length !== 1 ? 's' : ''} selected`
    : '';

  return (
    <>
      <TextField
        id="search"
        label="Search"
        value={searchInput}
        onChange={e => dispatch(searchHandleInput(e))}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={() => history.push(urlWithParams)}>
                <Search />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
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
    </>
  );
};

export default SearchResults;
