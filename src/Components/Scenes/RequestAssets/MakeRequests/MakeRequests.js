import React from 'react';
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
  const { makeRequestsFetch, notificationMessage } = props;
  const classes = tableStyles();
  let history = useHistory();

  const [notification, setNotification] = React.useState(false);

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
      <SnackBar
        message={notificationMessage}
        notification={notification}
        handleCloseNotification={handleCloseNotification}
      />
    </>
  );
};

export default MakeRequests;
