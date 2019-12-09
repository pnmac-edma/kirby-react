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
    margin: 8
  }
}));

const MakeRequests = props => {
  var {
    makeRequestsFetch,
    notificationMessage,
    isLoading,
    selectedEmployees,
    selectedSearchResultCopy,
    justification
  } = props;
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
    <div className={classes.buttonStyle}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        disabled={
          !selectedSearchResultCopy > 0 ||
          !selectedEmployees > 0 ||
          !justification > 0
        }
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
    </div>
  );
};

export default MakeRequests;
