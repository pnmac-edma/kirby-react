import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NewDestinationForm from './NewDestination-Form';

const styles = makeStyles(theme => ({
  container: {
    position: 'relative',
    margin: '0 auto',
    padding: '2rem',
    maxWidth: 1200,
    width: '100%'
  }
}));

const NewDestination = props => {
  const classes = styles();

  return (
    <>
      <Paper className={classes.container}>
        <NewDestinationForm />
      </Paper>
    </>
  );
};

export default NewDestination;
