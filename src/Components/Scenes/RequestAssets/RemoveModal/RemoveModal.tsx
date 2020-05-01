import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  ListItem
} from '@material-ui/core';
import weight from '@edma/design-tokens/js/weight';
import { handleModalToggle } from '../../../../State/RequestAsset/actions';
import { setRemoveSelected } from '../../../../State/SearchResult/actions';

const useStyles = makeStyles(theme => ({
  listItemText: {
    display: 'list-item',
    textTransform: 'capitalize',
    fontWeight: weight['bold']
  }
}));

const RemoveModal = ({ handleOpenNotification }: RemoveModalProps) => {
  const classes = useStyles();
  const { openModal, selectedAssets } = useSelector(
    ({ requestAssets }: any) => requestAssets
  );
  const { searchResult } = useSelector(({ searchResult }: any) => searchResult);
  const dispatch = useDispatch();

  const removeItemList = searchResult.results.reduce(
    (arr: Array<JSX.Element>, item: any) => {
      if (selectedAssets.includes(item.Id)) {
        arr.push(
          <ListItem className={classes.listItemText} key={item.Id}>
            {item.databasename}
          </ListItem>
        );
      }
      return arr;
    },
    []
  );

  const modalText =
    'Are you sure that you want to remove the following assets from your request?';

  const modalTitle = 'Removing Assets';

  return (
    <React.Fragment>
      <Dialog
        maxWidth="md"
        open={openModal}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{modalTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{modalText}</DialogContentText>
          <DialogContentText>{removeItemList}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(handleModalToggle())} color="primary">
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => {
              dispatch(setRemoveSelected(selectedAssets));
              handleOpenNotification();
            }}
            autoFocus
          >
            Confirm & Remove
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default RemoveModal;

interface RemoveModalProps {
  handleOpenNotification: Function;
}
