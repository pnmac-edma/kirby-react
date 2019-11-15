import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { Search } from '@material-ui/icons/';

const AccessListItem = () => {
  return (
    <ListItem button className="Nav__item">
      <Search className="Nav__icon" />
      <ListItemText className="Nav__text" primary="Find Data" />
    </ListItem>
  );
};

export default AccessListItem;
