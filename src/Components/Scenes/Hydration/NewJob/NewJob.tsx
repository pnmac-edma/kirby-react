import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import JobApp from '../App';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'fixed',
    height: '100%',
    width: 'calc(100% - 56px)'
  }
}));

interface NewJobProps {
  hydrationFormikRef: any;
}

const NewJob = ({ hydrationFormikRef }: NewJobProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <div style={{ height: '100%' }}>
        <JobApp hydrationFormikRef={hydrationFormikRef} />;
      </div>
    </Box>
  );
};

export default NewJob;
