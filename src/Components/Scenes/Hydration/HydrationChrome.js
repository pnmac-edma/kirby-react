import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const titleStyles = makeStyles(theme => ({
  typography: {
    color: theme.palette.common.black,
    textAlign: 'left',
    margin: 14
  }
}));

const HydrationChrome = props => {
  const classes = titleStyles();

  return (
    <>
      <Typography className={classes.typography} variant="h5">
        Jobs
      </Typography>
    </>
  );
};

export default HydrationChrome;
