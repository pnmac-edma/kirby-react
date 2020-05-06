import React from 'react';
import clsx from 'clsx';
import { makeStyles, Avatar, ListItem, ListItemText } from '@material-ui/core';
import color from '@edma/design-tokens/js/color';

const colorObj = color.color;
const colorKeys = Object.keys(colorObj);
const randomIndex = colorKeys[Math.floor(Math.random() * colorKeys.length)];
const randomColor = color.color[randomIndex];

const useStyles = makeStyles(theme => ({
  listItemSettings: {
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'fixed',
    bottom: 0,
    width: 'inherit',
    backgroundColor: colorObj.black.value,
    padding: theme.spacing(2)
  },
  avatar: {
    color: randomColor.against,
    backgroundColor: randomColor.value
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
