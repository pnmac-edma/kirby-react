import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { color } from '@edma/design-tokens';

const useStyles = makeStyles((theme: any) => ({
  typography: {
    color: theme.palette.type === 'light' ? color.black : color.white,
    textAlign: 'left',
    margin: 14
  }
}));

const RequestTableTitle = ({ title }: RequestTableTitleProps) => {
  const classes = useStyles();

  return (
    <Typography className={classes.typography} variant="h5">
      {title}
    </Typography>
  );
};

export default RequestTableTitle;

interface RequestTableTitleProps {
  title: string;
}
