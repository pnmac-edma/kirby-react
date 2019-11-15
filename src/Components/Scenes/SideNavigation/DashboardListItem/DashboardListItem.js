import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { Equalizer } from '@material-ui/icons/';

const DashboardListItem = () => {
  return (
    <ListItem button className="Nav__item Nav__item--is-active">
      <Equalizer className="Nav__icon" />
      <ListItemText className="Nav__text" primary="Dashboard" />
    </ListItem>
  );
};

export default DashboardListItem;
