import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  Avatar,
  ListItem,
  ListItemText,
  Tooltip
} from '@material-ui/core';
import color from '@edma/design-tokens/js/color';

const useStyles = makeStyles(theme => ({
  listItemSettings: {
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'fixed',
    bottom: 0,
    width: 'inherit',
    padding: theme.spacing(2),
    color: color.b100
  },
  avatar: {
    color: color.black,
    background: color.white
  }
}));

const AvatarListItem = ({
  closeAllArrows,
  closeDrawer
}: AvatarListItemProps) => {
  const classes = useStyles();

  const listItem = (
    <ListItem
      className={clsx('Nav__item', classes.listItemSettings)}
      onClick={closeAllArrows ? closeDrawer : undefined}
    >
      <Avatar className={clsx('Nav__icon Nav__avatar-icon', classes.avatar)}>
        SF
      </Avatar>
      <ListItemText className="Nav__text" primary="Settings" />
    </ListItem>
  );

  return (
    <>
      {closeAllArrows ? (
        listItem
      ) : (
        <Tooltip placement="right" title="Settings">
          {listItem}
        </Tooltip>
      )}
    </>
  );
};

export default AvatarListItem;

interface AvatarListItemProps {
  closeAllArrows: boolean;
  closeDrawer: () => void;
}
