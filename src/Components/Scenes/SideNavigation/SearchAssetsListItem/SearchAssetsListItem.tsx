import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem, ListItemText, Tooltip } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { handleSearchClick } from '../../../../State/SearchResult/actions';

const SearchAssetsListItem = ({
  closeAllArrows
}: SearchAssetsListItemProps) => {
  const { isSearchClicked } = useSelector(
    ({ searchResult }: any) => searchResult
  );
  const dispatch = useDispatch();

  const activeLink = useLocation();

  const listItem = (
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
      <ListItemText className="Nav__text" primary="Find Databases" />
    </ListItem>
  );

  return (
    <>
      {closeAllArrows ? (
        listItem
      ) : (
        <Tooltip placement="right" title="Find Databases">
          {listItem}
        </Tooltip>
      )}
    </>
  );
};

export default SearchAssetsListItem;

interface SearchAssetsListItemProps {
  closeAllArrows: boolean;
}
