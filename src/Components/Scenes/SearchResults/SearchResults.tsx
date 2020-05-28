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
  setSearchedInput,
  setToggleSearchCheckbox,
  setToggleSearchAllCheckbox
} from '../../../State/SearchResult/actions';
import { requestAssetsClick } from '../../../State/RequestAsset/actions';

const useStyles = makeStyles(theme => ({
  searchBar: {
    marginLeft: theme.spacing(1.5),
    width: '25%'
  },
  searchBarError: {
    marginLeft: theme.spacing(1.5)
  }
}));

const SearchResults = () => {
  const classes = useStyles();

  const { isLoading, searchedInput, searchResult, selected } = useSelector(
    ({ searchResult }: any) => searchResult
  );
  const { value, isError, isTouched } = useSelector(
    ({ searchResult }: any) => searchResult.searchInput
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

  const keyPressWrapper = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      history.push(urlWithParams);
    }
  };

  const footerButtonText = 'Request Access';

  const numOfDestinations =
    searchResult && searchResult.results
      ? `${searchResult.results.length} Database${
          searchResult.results.length !== 1 ? 's' : ''
        }`
      : '0 Databases';

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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(searchHandleInput(e))
        }
        onKeyPress={(e: React.KeyboardEvent) => {
          if (isNoError) {
            handleKeyPress(keyPressWrapper(e));
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
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
          This must be filled out before we can find your data.
        </FormHelperText>
      )}
      <TableWrapper
        isLoading={isLoading}
        setTitleText={() =>
          `Found ${numOfDestinations} for ${params || searchedInput}`
        }
        filter={['Name', 'Domain', 'Owner', 'Date Created']}
        selected={selected}
        columns={columns}
        data={searchResult ? searchResult.results : searchResult}
        searchedInput={params ? params : ''}
        setToggleCheckbox={(selected: Array<number>, id: number) =>
          dispatch(setToggleSearchCheckbox(selected, id))
        }
        setToggleAllCheckbox={(selected: Array<number>, data: Array<number>) =>
          dispatch(setToggleSearchAllCheckbox(selected, data))
        }
        footerButtonText={footerButtonText}
        footerButtonLink="/search/access"
        setFooterButtonClick={() =>
          dispatch(requestAssetsClick(selected, searchResult.results))
        }
      />
    </>
  );
};

export default SearchResults;
