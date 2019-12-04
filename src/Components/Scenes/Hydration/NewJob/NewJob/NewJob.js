import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NewJobHeader from '../NewJobHeader';

const chromeStyles = makeStyles(theme => ({
  container: {
    position: 'fixed',
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
  // Placeholder column until toolbar is implemented
  toolbar: {
    minWidth: '350px',
    backgroundColor: 'white'
  }
}));

const NewJob = props => {
  const classes = chromeStyles();
  const { newJobName } = props;

  return (
    <Box className={classes.container}>
      <Box className={classes.canvas}>
        {/* TODO: Move jobName to Redux */}
        <NewJobHeader jobName={newJobName}></NewJobHeader>
        {/* TODO: Add ETL canvas */}
      </Box>
      {/* TODO: Implement toolbar component */}
      <Box className={classes.toolbar}>Toolbar Placeholder</Box>
    </Box>
  );
};

export default NewJob;
