import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { color, font } from '@edma/design-tokens';

const useStyles = makeStyles(theme => ({
  title: {
    width: 'max-content'
  },
  menuStyle: {
    width: 'max-content',
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: 'bold',
    fontFamily: font.body,
    color: theme.palette.type === 'light' ? color.black : color.g300
  }
}));

const RequestedBy = props => {
  const { requestedBy } = props;
  const classes = useStyles();
  return (
    <>
      <Typography variant="overline" className={classes.menuStyle}>
        Requested By
      </Typography>
      <Typography className={classes.title}>{requestedBy}</Typography>
    </>
  );
};

export default RequestedBy;
