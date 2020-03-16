import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { color } from '@edma/design-tokens';

const useStyles = makeStyles(theme => ({
  typography: {
    color: theme.palette.type === 'light' ? color.black : color.white,
    textAlign: 'left',
    margin: 14
  }
}));

const RequestTableTitle = ({ title }) => {
  const classes = useStyles();

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
