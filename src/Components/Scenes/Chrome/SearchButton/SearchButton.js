import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, IconButton } from '@material-ui/core';

const searchButtonStyles = makeStyles(theme => ({
  iconButton: {
    position: 'absolute',
    right: 0,
    padding: 12
  }
}));

const SearchButton = props => {
  const { handleSearchClick } = props;
  const classes = searchButtonStyles();

  return (
    <div>
      <IconButton
        className={classes.iconButton}
        aria-label="Find data"
        onClick={() => handleSearchClick()}
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchButton;
