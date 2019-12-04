import React from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Dialog
} from '@material-ui/core';

const RemoveModal = props => {
  const {
    render,
    renderStyle,
    modalTitle,
    modalText,
    openModal,
    handleModalToggle,
    handleRemoveSelected,
    handleOpenNotification
  } = props;

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
          <DialogContentText style={renderStyle}>{render}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleModalToggle()} color="primary">
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => {
              handleRemoveSelected();
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
