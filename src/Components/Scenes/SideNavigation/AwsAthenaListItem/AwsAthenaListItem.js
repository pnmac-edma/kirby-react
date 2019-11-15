import React from 'react';
import clsx from 'clsx';
import { makeStyles, ListItem, ListItemText } from '@material-ui/core';
import { CloudQueue, ExitToApp } from '@material-ui/icons/';

const awsAthenaListItem = makeStyles(theme => ({
  exitToApp: {
    position: 'relative',
    top: 6,
    left: 4
  }
}));

const AwsAthenaListItem = () => {
  const classes = awsAthenaListItem();

  return (
    <ListItem button className="Nav__item">
      <CloudQueue className="Nav__icon" />
      <ListItemText className="Nav__text">
        AWS Athena
        <ExitToApp className={clsx('Nav__icon', classes.exitToApp)} />
      </ListItemText>
    </ListItem>
  );
};

export default AwsAthenaListItem;
