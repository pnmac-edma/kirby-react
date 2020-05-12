import React from 'react';
import clsx from 'clsx';
import { makeStyles, Avatar, ListItem, ListItemText } from '@material-ui/core';
import color from '@edma/design-tokens/js/color';

const useStyles = makeStyles(theme => ({
  listItemSettings: {
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'fixed',
    bottom: 0,
    width: 'inherit',
    backgroundColor: color.black,
    padding: theme.spacing(2)
  },
  avatar: {
    color: color.white,
    background: color.green
  }
}));

const AvatarListItem = () => {
  const classes = useStyles();

  return (
    <ListItem className={clsx('Nav__item', classes.listItemSettings)}>
      <Avatar className={clsx('Nav__icon Nav__avatar-icon', classes.avatar)}>
        SF
      </Avatar>
      <ListItemText className="Nav__text" primary="Settings" />
    </ListItem>
  );
};

export default AvatarListItem;
