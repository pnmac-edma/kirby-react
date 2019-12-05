import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import SnackBar from '../../../Presentational/RequestAssets/SnackBar';
import SnackBarContainer from '../SnackBar/SnackBar-Container';

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
  console.log('propskskdkskdfkjsdfkj', props);
  const {
    makeRequestsFetch,
    notificationMessage,
    handleOpenNotification
  } = props;
  const classes = tableStyles();
  let history = useHistory();
  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={(() => makeRequestsFetch(), handleOpenNotification)}
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
      {notificationMessage ? (
        <SnackBar messagekkkk={notificationMessage} />
      ) : null}
    </>
  );
};

export default MakeRequests;
