import React from 'react';
import { Typography, Divider, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  title: {
    width: 'max-content'
  },
  menuStyle: {
    width: 'max-content',
    textTransform: 'uppercase',
    marginBottom: 8
  },
  tit: {
    marginBottom: 36
  }
}));

const RequestedBy = props => {
  const classes = useStyles();
  const { requestedBy } = props;
  return (
    <>
      <Typography className={classes.menuStyle}>Requested For</Typography>
      <Typography className={classes.title}>{requestedBy}</Typography>
    </>
  );
};

export default RequestedBy;
