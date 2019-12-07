import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import SnackBar from '../../../Presentational/RequestAssets/SnackBar';

const tableStyles = makeStyles(theme => ({
  button: {
    textTransform: 'none',
    fontWeight: 'bold',
    color: theme.palette.common.white,
    whiteSpace: 'nowrap',
    margin: 10
  }
}));

const MakeRequests = props => {
  var { makeRequestsFetch, notificationMessage, isLoading } = props;
  const classes = tableStyles();
  let history = useHistory();

  var [notification, setNotification] = React.useState(false);

  const handleOpenNotification = () => {
    setNotification(true);
  };

  const handleCloseNotification = () => {
    setNotification(false);
  };

  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => {
          makeRequestsFetch();
          handleOpenNotification();
        }}
      >
        Requests Assets
      </Button>
      <Button
        onClick={() => history.goBack()}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Cancel
      </Button>
      {isLoading ? (
        <SnackBar
          message={notificationMessage}
          notification={notification}
          handleCloseNotification={handleCloseNotification}
        />
      ) : null}
    </>
  );
};

export default MakeRequests;
