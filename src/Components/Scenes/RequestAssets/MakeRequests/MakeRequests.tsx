import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { color } from '@edma/design-tokens';
import { useHistory } from 'react-router-dom';
import SnackBar from '../../../Presentational/SnackBar/SnackBar';
import {
  makeRequestsFetch,
  setClearSelectedAssets
} from '../../../../State/RequestAsset/actions';

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
const MakeRequests = () => {
  const classes = tableStyles();

  const [notification, setNotification] = useState(false);

  const {
    isLoading,
    justification,
    notificationMessage,
    selectedEmployees,
    selectedAssets
  } = useSelector(({ requestAssets }: any) => requestAssets);
  const searchedInput = useSelector(
    ({ searchResult }: any) => searchResult.searchedInput
  );
  const dispatch = useDispatch();

  const handleOpenNotification = () => {
    setNotification(true);
  };

  const handleCloseNotification = () => {
    setNotification(false);
  };

  const history = useHistory();
  const urlWithParams = `/search?params=${searchedInput}`;

  // depending on what we do with redux store saving into session
  // storage we might be able to get rid of this useEffect and action
  useEffect(() => {
    dispatch(setClearSelectedAssets());
  }, [dispatch]);

  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        disabled={
          !selectedAssets.length ||
          !selectedEmployees.length ||
          !justification.length
        }
        onClick={() => {
          dispatch(makeRequestsFetch());
          handleOpenNotification();
        }}
      >
        Request Assets
      </Button>
      <Button
        onClick={() => history.push(urlWithParams)}
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
    </>
  );
};

export default MakeRequests;
