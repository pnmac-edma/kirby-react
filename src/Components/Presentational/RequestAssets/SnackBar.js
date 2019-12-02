import React from 'react';
import { Snackbar } from '@material-ui/core';

export default function SnackbarContainer(props) {
  let { notification, handleRemoveNotification, message } = props;

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        open={notification}
        autoHideDuration={2000}
        onClose={handleRemoveNotification}
        message={<span id="message-id">{message}</span>}
      />
    </div>
  );
}
