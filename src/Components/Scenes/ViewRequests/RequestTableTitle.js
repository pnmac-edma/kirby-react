import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const titleStyles = makeStyles(theme => ({
  typography: {
    color: theme.palette.common.black,
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

RequestTableTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default RequestTableTitle;
