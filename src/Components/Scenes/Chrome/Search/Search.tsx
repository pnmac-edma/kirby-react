import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button,
  IconButton,
  TextField,
  FormHelperText,
  Dialog,
  DialogActions,
  DialogContent,
  Grid
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import {
  searchHandleInput,
  handleKeyPress,
  handleSearchClose
} from '../../../../State/SearchResult/actions';

const Search = () => {
  const { value, isError, isTouched } = useSelector(
    ({ searchResult }: any) => searchResult.searchInput
  );
  const { isSearchClicked } = useSelector(
    ({ searchResult }: any) => searchResult
  );
  const dispatch = useDispatch();

  const isNoError = isTouched && !isError;

  const history = useHistory();

  const urlWithParams = `/search?params=${value}`;

  const keyPressWrapper = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // TODO: reconsider how to search while updating URL params.
      // Currently, this updates the URL, and when we render `Search`,
      // it looks at the URL, extracts the params, and then performs the request.
      // This isn't necessarily bad, but potentially could be made cleaner
      history.push(urlWithParams);
    }
  };

  return (
    <React.Fragment>
      <Dialog
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
                helperText="Find and request access to data in Kirby."
                type="text"
                fullWidth
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(searchHandleInput(e))
                }
                onKeyPress={e => {
                  if (isNoError) {
                    dispatch(handleKeyPress(keyPressWrapper(e)));
                  }
                }}
              />
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => {
                  if (isNoError) {
                    history.push(urlWithParams);
                  }
                }}
              >
                <SearchIcon />
              </IconButton>
            </Grid>
          </Grid>
          {isError && (
            <FormHelperText error={isError}>
              Please enter a non-empty search
            </FormHelperText>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => dispatch(handleSearchClose())}
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

export default Search;
