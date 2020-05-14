import React from 'react';
import { ListItem, ListItemText, Tooltip } from '@material-ui/core';
import { Equalizer } from '@material-ui/icons/';
import { Link, useLocation } from 'react-router-dom';

const DashboardListItem = ({
  closeAllArrows,
  closeDrawer
}: DashboardListItemProps) => {
  const activeLink = useLocation();
  const listItem = (
    <ListItem
      onClick={closeAllArrows ? closeDrawer : undefined}
      component={Link}
      to="/"
      button
      className={
        '/' === activeLink.pathname
          ? 'Nav__item Nav__item--is-active'
          : 'Nav__item'
      }
    >
      <Equalizer className="Nav__icon" />
      <ListItemText className="Nav__text" primary="Dashboard" />
    </ListItem>
  );

  return (
    <>
      {closeAllArrows ? (
        listItem
      ) : (
        <Tooltip placement="right" title="Dashboard">
          {listItem}
        </Tooltip>
      )}
    </>
  );
};

export default DashboardListItem;

interface DashboardListItemProps {
  closeAllArrows: boolean;
  closeDrawer: () => void;
}
