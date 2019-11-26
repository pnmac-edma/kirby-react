import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

const FindDataListItem = props => {
  const { handleSearchClick, isSearchClicked } = props;
  const activeLink = useLocation();
  console.log('Clicked', isSearchClicked);

  return (
    <ListItem
      component={Link}
      to="/search"
      onClick={() => handleSearchClick()}
      button
      className={
        isSearchClicked === true || '/search' === activeLink.pathname
          ? 'Nav__item Nav__item--is-active'
          : 'Nav__item'
      }
    >
      <Search className="Nav__icon" />
      <ListItemText className="Nav__text" primary="Find Data" />
    </ListItem>
  );
};

export default FindDataListItem;
