import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { VpnKeyOutlined } from '@material-ui/icons/';

const KeysListItem = () => {
  return (
    <ListItem button className="Nav__item">
      <VpnKeyOutlined className="Nav__icon" />
      <ListItemText className="Nav__text" primary="Keys" />
    </ListItem>
  );
};

export default KeysListItem;
