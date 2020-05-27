import React from 'react';
import { Menu, Toolbar, Typography } from '@material-ui/core';
import { lighten, makeStyles } from '@material-ui/core/styles';
import TableWrapperFilterChip from './TableWrapperFilterChip';
import TableWrapperFilter from './TableWrapperFilter';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '58px'
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        }
}));

interface TableWrapperHeaderProps {
  setTitleText: Function | null;
  filter: Array<string> | null;
  filterForm: any;
  setFilterForm: Function;
  selectedFilters: any;
  isFilterClick: boolean;
  anchorEl: any;
  setIsFilterClick: Function;
  setAnchorEl: Function;
  setSelectedFilters: Function;
  removeFilter: Function;
}

const TableWrapperHeader = ({
  setTitleText,
  filter,
  filterForm,
  setFilterForm,
  selectedFilters,
  isFilterClick,
  anchorEl,
  setIsFilterClick,
  setAnchorEl,
  setSelectedFilters,
  removeFilter
}: TableWrapperHeaderProps) => {
  const classes = useStyles();

  const handleClose = () => {
    setAnchorEl(null);
    setIsFilterClick(!isFilterClick);
  };

  let anchorPos;
  let anchorY;

  if (anchorEl) {
    anchorPos = anchorEl.getBoundingClientRect();
    anchorY = anchorPos.y;
  }

  return (
    <>
      {setTitleText && (
        <Toolbar className={classes.root}>
          <Typography variant="h6" id="tableTitle">
            {setTitleText()}
          </Typography>
          {filter && (
            <TableWrapperFilterChip
              anchorEl={anchorEl}
              isFilterClick={isFilterClick}
              selectedFilters={selectedFilters}
              setAnchorEl={setAnchorEl}
              setIsFilterClick={setIsFilterClick}
              removeFilter={removeFilter}
            />
          )}
        </Toolbar>
      )}

      {isFilterClick ? (
        <Menu
          id="filters"
          keepMounted
          anchorEl={anchorEl}
          open={isFilterClick}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: anchorY - 300,
            horizontal: 'right'
          }}
        >
          <Toolbar>
            <TableWrapperFilter
              filter={filter}
              filterForm={filterForm}
              setSelectedFilters={setSelectedFilters}
              setFilterForm={setFilterForm}
              setAnchorEl={setAnchorEl}
              anchorEl={anchorEl}
              isFilterClick={isFilterClick}
              setIsFilterClick={setIsFilterClick}
            />
          </Toolbar>
        </Menu>
      ) : null}
    </>
  );
};

export default TableWrapperHeader;
