import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { color } from '@edma/design-tokens';
import { useHistory } from 'react-router-dom';
import SnackBar from '../../../Presentational/RequestAssets/SnackBar';

const tableStyles = makeStyles(theme => ({
  button: {
    textTransform: 'none',
    fontWeight: 'bold',
    margin: theme.spacing(1.5)
  },
  secondaryButton: {
    color: color.b600,

    '&:hover': {
      color: color.b600,
      background: color.b50
    }
  }
}));

// TODO: api call for making requests doesn't work, need to fix
const MakeRequests = props => {
  const {
    makeRequestsFetch,
    notificationMessage,
    isLoading,
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
          !selectedSearchResultCopyLength ||
          !selectedEmployeesLength ||
          !justificationLength
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
        className={`${classes.secondaryButton} ${classes.button}`}
        variant="contained"
        color="secondary"
      >
        Cancel
      </Button>
      {!isLoading ? (
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
