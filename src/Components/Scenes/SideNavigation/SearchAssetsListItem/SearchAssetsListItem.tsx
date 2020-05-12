import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem, ListItemText } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { handleSearchClick } from '../../../../State/SearchResult/actions';

const SearchAssetsListItem = () => {
  const { isSearchClicked } = useSelector(
    ({ searchResult }: any) => searchResult
  );
  const dispatch = useDispatch();

  const activeLink = useLocation();

  return (
    <ListItem
      component={Link}
      to={window.location.pathname}
      onClick={() => dispatch(handleSearchClick())}
      button
      className={
        isSearchClicked || '/search' === activeLink.pathname
          ? 'Nav__item Nav__item--is-active'
          : 'Nav__item'
      }
    >
      <Search className="Nav__icon" />
      <ListItemText className="Nav__text" primary="Search Destinations" />
    </ListItem>
  );
};

export default SearchAssetsListItem;
