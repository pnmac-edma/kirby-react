import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NewJobHeader from '../NewJobHeader';
import Canvas from '../Canvas';

const chromeStyles = makeStyles(theme => ({
  container: {
    position: 'fixed',
    height: '100%',
    width: 'calc(100% - 56px)'
  }
}));

const NewJob = props => {
  const classes = chromeStyles();
  const { newJobName } = props;

  return (
    <Box className={classes.container}>
      {/* TODO: Move jobName to Redux */}
      <NewJobHeader jobName={newJobName}></NewJobHeader>
      <div style={{ height: '100%' }}>
        <Canvas />
      </div>
    </Box>
  );
};

export default NewJob;
