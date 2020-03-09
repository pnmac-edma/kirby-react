import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import JobApp from '../App/index';

const chromeStyles = makeStyles(theme => ({
  container: {
    position: 'fixed',
    height: '100%',
    width: 'calc(100% - 56px)'
  }
}));

const NewJob = () => {
  const classes = chromeStyles();

  return (
    <Box className={classes.container}>
      <div style={{ height: '100%' }}>
        <JobApp />;
      </div>
    </Box>
  );
};

export default NewJob;
