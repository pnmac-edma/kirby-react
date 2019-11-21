import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

const SearchInput = props => {
  const {
    searchHandleInput,
    searchInput,
    searchResultRequest,
    handleKeyPress,
    isSearchClicked
  } = props;
  return (
    <React.Fragment>
      <Dialog open={isSearchClicked} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Search</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Find and request access to data in Kirby.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Start Typing..."
            type="text"
            value={searchInput}
            onChange={e => searchHandleInput(e)}
            fullWidth
            onKeyPress={e =>
              handleKeyPress(e.key === 'Enter' ? searchResultRequest() : null)
            }
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => searchResultRequest()}
            color="primary"
            component={Link}
            to="Search"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default SearchInput;
