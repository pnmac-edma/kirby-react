import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NewJobHeader from './NewJobHeader';

const chromeStyles = makeStyles(theme => ({
  container: {
    position: 'fixed',
    zIndex: 1101, // Positions container on top of original header bar
    height: '100%',
    width: '100%',
    display: 'flex'
  },
  // Placeholder pattern until canvas is implemented
  canvas: {
    background:
      'repeating-linear-gradient(45deg, #EDF5FF, #EDF5FF 15px, #FFFFFF 5px, #FFFFFF 20px)',
    flexGrow: 1
  },
  toolbar: {
    minWidth: '350px',
    backgroundColor: 'white'
  }
}));

const HydrationChrome = props => {
  const classes = chromeStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.canvas}>
        <NewJobHeader jobName="My New Job"></NewJobHeader>
      </Box>
      {/* Placeholder box until toolbar is implemented */}
      <Box className={classes.toolbar}>Toolbar Placeholder</Box>
    </Box>
  );
};

export default HydrationChrome;
