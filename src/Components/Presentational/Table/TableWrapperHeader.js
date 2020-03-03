import React from 'react';
import { Toolbar, Typography } from '@material-ui/core';
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

const TableWrapperHeader = props => {
  const {
    setTitleText,
    filter,
    filterForm,
    setFilterForm,
    selectedFilters,
    isFilterClick,
    setIsFilterClick,
    setSelectedFilters,
    removeFilter
  } = props;
  const classes = useStyles();

  return (
    <>
      {setTitleText && (
        <Toolbar className={classes.root}>
          <Typography variant="h6" id="tableTitle">
            {setTitleText()}
          </Typography>
          {filter && (
            <TableWrapperFilterChip
              isFilterClick={isFilterClick}
              selectedFilters={selectedFilters}
              setIsFilterClick={setIsFilterClick}
              removeFilter={removeFilter}
            />
          )}
        </Toolbar>
      )}

      {isFilterClick ? (
        <Toolbar className={classes.filterForm}>
          <TableWrapperFilter
            filter={filter}
            filterForm={filterForm}
            setSelectedFilters={setSelectedFilters}
            setFilterForm={setFilterForm}
          />
        </Toolbar>
      ) : null}
    </>
  );
};

export default TableWrapperHeader;
