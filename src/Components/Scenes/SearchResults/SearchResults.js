import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormHelperText, IconButton, TextField } from '@material-ui/core';
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
    selected,
    setToggleSearchCheckbox,
    setToggleSearchAllCheckbox
  } = props;
  const params = useQuery('params');

  const { value, isError, isTouched } = useSelector(
    state => state.searchResult.searchInput
  );
  const dispatch = useDispatch();

  const isNoError = isTouched && !isError;

  const history = useHistory();

  const urlWithParams = `/search?params=${value}`;

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
      dispatch(searchResultRequest(value));
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
        value={value}
        onChange={e => dispatch(searchHandleInput(e))}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton
                onClick={() => {
                  if (isNoError) {
                    history.push(urlWithParams);
                  }
                }}
              >
                <Search />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {isError && (
        <FormHelperText error={isError}>
          Please enter a non-empty search
        </FormHelperText>
      )}
      <TableWrapper
        isLoading={isLoading}
        setTitleText={() => `Search Results for ${params}`}
        filter={['Name', 'Domain', 'Owner', 'Date Created']}
        selected={selected}
        columns={columns}
        data={searchResult ? searchResult.results : searchResult}
        searchedInput={params}
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
