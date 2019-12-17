import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  Grid
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const SearchInput = props => {
  const {
    searchInput,
    isSearchClicked,
    searchHandleInput,
    searchResultRequest,
    handleKeyPress,
    handleSearchClose
  } = props;

  const history = useHistory();
  const urlWithParams = `/search?params=${searchInput}`;

  const keyPressWrapper = e => {
    if (e.key === 'Enter') {
      // TODO: reconsider how to search while updating URL params.
      // Currently, this updates the URL, and when we render `Search`,
      // it looks at the URL, extracts the params, and then performs the request.
      // This isn't necessarily bad, but potentially could be made cleaner
      history.push(urlWithParams);
    }
  };

  const handleEscClose = e => {
    if (e.key === 'Escape') {
      handleSearchClose();
    }
  };

  const handleBlurError = () => {
    if (!searchInput) {
      console.log('you blured me');
    }
  };

  return (
    <React.Fragment>
      <Dialog
        onKeyDown={handleEscClose}
        open={isSearchClicked}
        aria-labelledby="form-dialog-title"
        className="search-modal"
      >
        <DialogContent>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Start Typing..."
                helperText={'Find and request access to data in Kirby.'}
                type="text"
                value={searchInput}
                onChange={e => searchHandleInput(e)}
                fullWidth
                onKeyPress={e => handleKeyPress(keyPressWrapper(e))}
                onBlur={handleBlurError}
              />
            </Grid>
            <Grid item>
              <Button onClick={() => searchResultRequest()}>
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleSearchClose()}
            color="primary"
            className="search-modal__close-btn"
          >
            <CloseIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default SearchInput;
