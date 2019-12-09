import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import color from '@edma/design-tokens/js/color';
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
    backgroundColor: color.g50,
    backgroundSize: '96px 96px, 96px 96px, 16px 16px, 16px 16px',
    backgroundPosition: '0 0, 0 0, 0 0, 0 0',
    backgroundImage:
      `linear-gradient(${lighten(color.g100, 0.4)} 1px, transparent 1px), ` +
      `linear-gradient(90deg, ${lighten(
        color.g100,
        0.4
      )} 1px, transparent 1px), ` +
      `linear-gradient(${lighten(color.g100, 0.4)} 1px, transparent 1px), ` +
      `linear-gradient(90deg, ${lighten(
        color.g100,
        0.4
      )} 1px, transparent 1px)`,
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
