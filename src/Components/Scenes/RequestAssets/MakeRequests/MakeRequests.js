import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import SnackBar from '../../../Presentational/RequestAssets/SnackBar';

const tableStyles = makeStyles(theme => ({
  button: {
    textTransform: 'none',
    fontWeight: 'bold',
    color: theme.palette.common.white,
    margin: 8
  }
}));

const MakeRequests = props => {
  const {
    makeRequestsFetch,
    notificationMessage,
    isWaiting,
    selectedEmployeesLength,
    selectedSearchResultCopyLength,
    justificationLength
  } = props;
  const classes = tableStyles();
  const history = useHistory();

  const [notification, setNotification] = useState(false);

  const handleOpenNotification = () => {
    setNotification(true);
  };

  const handleCloseNotification = () => {
    setNotification(false);
  };

  return (
    <div className={classes.buttonStyle}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        disabled={
          !selectedSearchResultCopyLength > 0 ||
          !selectedEmployeesLength > 0 ||
          !justificationLength > 0
        }
        onClick={() => {
          makeRequestsFetch();
          handleOpenNotification();
        }}
      >
        Request Assets
      </Button>
      <Button
        onClick={() => history.goBack()}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Cancel
      </Button>
      {isWaiting ? (
        <SnackBar
          message={notificationMessage}
          notification={notification}
          handleCloseNotification={handleCloseNotification}
        />
      ) : null}
    </div>
  );
};

export default MakeRequests;
