import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import JobHeader from '../JobHeader';
import JobDesignerApp from '../JobDesigner/JobDesigner';

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
      <JobHeader jobName={newJobName}></JobHeader>
      <div style={{ height: '100%' }}>
        <JobDesignerApp />;
      </div>
    </Box>
  );
};

export default NewJob;
