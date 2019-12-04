import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  title: {
    width: 'max-content'
  },
  menuStyle: {
    width: 'max-content',
    textTransform: 'uppercase',
    marginBottom: 8
  }
}));

const RequestedBy = props => {
  const { requestedBy } = props;
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.menuStyle}>Requested By</Typography>
      <Typography className={classes.title}>{requestedBy}</Typography>
    </>
  );
};

export default RequestedBy;
