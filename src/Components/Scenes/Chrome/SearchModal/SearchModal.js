import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, IconButton } from '@material-ui/core';

const searchModalStyles = makeStyles(theme => ({
  iconButton: {
    position: 'absolute',
    right: 0,
    padding: 12
  }
}));

const SearchModal = props => {
  const { handleSearchClick } = props;
  const classes = searchModalStyles();

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

export default SearchModal;
