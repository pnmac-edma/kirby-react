import React from 'react';
import { Tooltip, IconButton, Chip } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    textAlign: 'right',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  },
  spacer: {
    flexGrow: '2',
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  },
  chip: {
    marginLeft: theme.spacing(0.5)
  },
  filterToggle: {
    padding: '0px',
    marginLeft: theme.spacing(0.5)
  }
}));

const TableWrapperFilterChip = props => {
  const {
    selectedFilters,
    isFilterClick,
    setIsFilterClick,
    removeFilter
  } = props;
  const classes = useStyles();

  const chips = selectedFilters.map(
    ({ filterBy, filterType, filterTerm }, i) => {
      return (
        <Chip
          className={classes.chip}
          key={i}
          label={`${filterBy} ${filterType} "${filterTerm}"`}
          onDelete={() => removeFilter(i)}
        />
      );
    }
  );

  return (
    <>
      <div className={classes.spacer}>{chips}</div>
      <Tooltip title="Filters">
        <IconButton
          className={classes.filterToggle}
          aria-label="filter list"
          onClick={() => setIsFilterClick(!isFilterClick)}
        >
          {isFilterClick ? <CloseIcon /> : <FilterListIcon />}
        </IconButton>
      </Tooltip>
    </>
  );
};

export default TableWrapperFilterChip;
