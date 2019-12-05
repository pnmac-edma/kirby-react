import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { Equalizer } from '@material-ui/icons/';
import { Link, useLocation } from 'react-router-dom';

const DashboardListItem = ({ closeDrawer }) => {
  const activeLink = useLocation();
  return (
    <ListItem
      onClick={closeDrawer}
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
};

export default DashboardListItem;
