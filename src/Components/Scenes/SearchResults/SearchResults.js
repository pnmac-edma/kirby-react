import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormHelperText, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Search } from '@material-ui/icons';
import TableWrapper from '../../Presentational/Table/TableWrapper';
import { useQuery } from '../../../Hooks/customHooks';
import {
  handleKeyPress,
  searchHandleInput,
  searchResultRequest,
  setSearchedInput
} from '../../../State/SearchResult/actions';

const useStyles = makeStyles(theme => ({
  searchBar: {
    marginLeft: theme.spacing(1.5),
    width: '25%'
  },
  searchBarError: {
    marginLeft: theme.spacing(1.5)
  }
}));

const SearchResults = props => {
  const {
    isLoading,
    requestAssetsClick,
    searchResult,
    selected,
    setToggleSearchCheckbox,
    setToggleSearchAllCheckbox
  } = props;
  const classes = useStyles();

  const searchedInput = useSelector(
    ({ searchResult }) => searchResult.searchedInput
  );
  const { value, isError, isTouched } = useSelector(
    state => state.searchResult.searchInput
  );
  const dispatch = useDispatch();

  const params = useQuery('params');

  const history = useHistory();

  const urlWithParams = `/search?params=${value}`;

  const isNoError = isTouched && !isError;

  const columns = [
    {
      name: 'Name',
      property: 'databasename'
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

  const keyPressWrapper = e => {
    if (e.key === 'Enter') {
      history.push(urlWithParams);
    }
  };

  const footerButtonText = selected
    ? `${selected.length} request${selected.length !== 1 ? 's' : ''} selected`
    : '';

  useEffect(() => {
    if (params) {
      dispatch(searchResultRequest(params));
      dispatch(setSearchedInput(params));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <>
      <TextField
        className={classes.searchBar}
        id="search"
        label="Search"
        value={value}
        onChange={e => dispatch(searchHandleInput(e))}
        onKeyPress={e => {
          if (isNoError) {
            handleKeyPress(keyPressWrapper(e));
          }
        }}
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
        <FormHelperText className={classes.searchBarError} error={isError}>
          Please enter a non-empty search
        </FormHelperText>
      )}
      <TableWrapper
        isLoading={isLoading}
        setTitleText={() => `Search Results for ${params || searchedInput}`}
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
