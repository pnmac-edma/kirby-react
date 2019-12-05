import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

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
  const { makeRequestsFetch } = props;
  const classes = tableStyles();
  let history = useHistory();
  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => makeRequestsFetch()}
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
    </>
  );
};

export default MakeRequests;
