import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem
} from '@material-ui/core';
import weight from '@edma/design-tokens/js/weight';
import { handleModalToggle } from '../../../../State/RequestAsset/actions';
import { setRemoveSelected } from '../../../../State/SearchResult/actions';

const RemoveModal = ({ handleOpenNotification }: RemoveModalProps) => {
  const { openModal, selectedAssets } = useSelector(
    ({ requestAssets }: any) => requestAssets
  );
  const selected = useSelector(
    ({ searchResult }: any) => searchResult.selected
  );
  const dispatch = useDispatch();

  // const removeItemList = selectedSearchResultCopy.reduce(
  //   (acc: Array<JSX.Element>, { Id, name }: any) => {
  //     if (selected.some((id: string) => id === Id)) {
  //       acc.push(
  //         <ListItem key={Id}>
  //           {name}
  //         </ListItem>
  //       );
  //     }
  //     return acc;
  //   },
  //   []
  // );

  const modalText =
    'Are you sure that you want to remove the following assets from your request?';

  const modalTitle = 'Removing Assets';
  console.log(selected);
  console.log(selectedAssets);

  // const renderStyle = { textTransform: 'capitalize', fontWeight: weight['bold'] };

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
          <List>
            {selectedAssets}
            {/* <DialogContentText>{removeItemList}</DialogContentText> */}
          </List>
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
