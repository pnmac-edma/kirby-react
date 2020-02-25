import React from 'react';
import { Typography, Tooltip, IconButton, Toolbar } from '@material-ui/core';
import { lighten, makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';
import SearchFilterContainer from '../SearchFilter/SearchFilter-Container';
import SearchFilterChipContainer from '../SearchFilterChip/SearchFilterChip-Container';

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
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
        },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: '0 0 auto'
  }
}));

const TableHeadTitle = props => {
  const { searchInput, isFilterClick, handleFilterClick } = props;
  const classes = useToolbarStyles();
  return (
    <React.Fragment>
      <Toolbar>
        <div className={classes.title}>
          <Typography variant="h6" id="tableTitle">
            Search results for "{searchInput}"
          </Typography>
        </div>

        <div className={classes.spacer}>
          {' '}
          <SearchFilterChipContainer />{' '}
        </div>
        <div className={classes.actions}>
          <Tooltip title="Filters">
            <IconButton
              aria-label="filter list"
              onClick={() => handleFilterClick()}
            >
              {isFilterClick ? <CloseIcon /> : <FilterListIcon />}
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
      {isFilterClick ? (
        <Toolbar>
          <SearchFilterContainer />
        </Toolbar>
      ) : null}
    </React.Fragment>
  );
};

export default TableHeadTitle;
