import React, { createRef } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, Paper, InputBase, IconButton } from '@material-ui/core';
import color from '@edma/design-tokens/js/color';
import radius from '@edma/design-tokens/js/borderRadius';

const searchBarStyles = makeStyles(theme => ({
  root: {
    top: 4,
    marginRight: 24,
    color: theme.palette.type === 'light' ? color.black : color.g200,
    backgroundColor: 'transparent',
    boxShadow: theme.shadows[0],
    display: 'flex',
    alignItems: 'center',
    borderRadius: radius[1],
    width: 312,
    height: 48,
    position: 'absolute',
    right: 0,
    transition: 'all .2s cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:focus': {
      background: theme.palette.type === 'light' ? color.g200 : color.g500,
      width: 312,
      height: 48
    }
  },
  input: {
    borderRadius: radius[1],
    color: theme.palette.type === 'light' ? color.black : color.g200,
    backgroundColor: theme.palette.type === 'light' ? color.g200 : color.g500,
    width: 0,
    height: 48,
    boxShadow: theme.shadows[1],
    opacity: 0,
    position: 'absolute',
    right: 0,
    transition: 'all .2s ease-in-out',

    '&.Mui-focused': {
      width: '100%',
      paddingLeft: 16,
      paddingRight: 48,
      opacity: 1
    }
  },
  iconButton: {
    position: 'absolute',
    right: 0,
    padding: 12
  },
  searchIcon: {
    fontSize: 24,
    fill: theme.palette.type === 'light' ? color.black : color.white
  }
}));

const SearchBar = () => {
  const classes = searchBarStyles();
  const textInput = createRef();

  const focusTextInput = () => {
    textInput.current.focus();
  };

  return (
    <form>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Find data"
          inputProps={{ 'aria-label': 'Find data' }}
          inputRef={textInput}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="Find data"
          onClick={focusTextInput}
        >
          <SearchIcon className={classes.searchIcon} />
        </IconButton>
      </Paper>
    </form>
  );
};

export default SearchBar;
