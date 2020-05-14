import React from 'react';
import clsx from 'clsx';
import { ListItem, Tooltip } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons/';

const MenuToggleListItem = ({
  closeAllArrows,
  toggleDrawer
}: MenuToggleListItemProps) => {
  const listItem = (
    <ListItem
      button
      className={clsx('Nav__item Nav__top-item')}
      onClick={toggleDrawer}
    >
      <KeyboardArrowRight className="Nav__icon Nav__toggle-icon" />
    </ListItem>
  );

  return (
    <>
      {closeAllArrows ? (
        listItem
      ) : (
        <Tooltip placement="right" title="Expand Menu">
          {listItem}
        </Tooltip>
      )}
    </>
  );
};

export default MenuToggleListItem;

interface MenuToggleListItemProps {
  closeAllArrows: boolean;
  toggleDrawer: () => void;
}
