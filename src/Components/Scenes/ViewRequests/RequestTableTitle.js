import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const titleStyles = makeStyles(theme => ({
  typography: {
    color: 'black',
    textAlign: 'left',
    margin: 14
  }
}));

const RequestTableTitle = ({ title }) => {
  const classes = titleStyles();
  return (
    <Typography className={classes.typography} variant="h5">
      {title}
    </Typography>
  );
};

export default RequestTableTitle;
