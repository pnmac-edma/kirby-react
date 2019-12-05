import React from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

const SnackBar = props => {
  const classes = useStyles();
  console.log('llllll i hope', props);
  const { message, notification, handleCloseNotification } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      open={notification}
      onClose={handleCloseNotification}
      autoHideDuration={1500}
      message={<span id="message-id">{message}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={handleCloseNotification}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};

export default SnackBar;
