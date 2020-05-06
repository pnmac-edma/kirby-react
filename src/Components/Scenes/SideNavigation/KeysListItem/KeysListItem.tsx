import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { VpnKeyOutlined } from '@material-ui/icons/';
import { Link, useLocation } from 'react-router-dom';

const KeysListItem = ({ closeDrawer }: KeysListItemProps) => {
  const activeLink = useLocation();

  return (
    <ListItem
      onClick={closeDrawer}
      component={Link}
      to="/keys"
      button
      className={
        '/keys' === activeLink.pathname
          ? 'Nav__item Nav__item--is-active'
          : 'Nav__item'
      }
    >
      <VpnKeyOutlined className="Nav__icon" />
      <ListItemText className="Nav__text" primary="Keys" />
    </ListItem>
  );
};

export default KeysListItem;

interface KeysListItemProps {
  closeDrawer: () => void;
}
