import React from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchInput = props => {
  const { searchHandleInput, searchInput, searchResultRequest } = props;
  return (
    <React.Fragment>
      <TextField value={searchInput} onChange={e => searchHandleInput(e)} />
      <Button onClick={() => searchResultRequest()}>
        <SearchIcon />
      </Button>
    </React.Fragment>
  );
};

export default SearchInput;
