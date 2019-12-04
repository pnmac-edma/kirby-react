import React from 'react';
import clsx from 'clsx';
import { ListItem, ListItemText } from '@material-ui/core';
import { Business } from '@material-ui/icons/';

const UserGroup = ({ closeDrawer }) => {
  return (
    <ListItem
      onClick={closeDrawer}
      button
      className={clsx('Nav__item Nav__top-item')}
    >
      <Business className="Nav__icon Nav__org-icon" />
      <ListItemText primary="Data Governance" className="Nav__text" />
    </ListItem>
  );
};

export default UserGroup;
