import React from 'react';
import { Tooltip, IconButton, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  spacer: {
    // flexGrow: 2,
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

interface TableWrapperFilterChipProps {
  selectedFilters: any;
  isFilterClick: boolean;
  setIsFilterClick: Function;
  removeFilter: Function;
}

const TableWrapperFilterChip = ({
  selectedFilters,
  isFilterClick,
  setIsFilterClick,
  removeFilter
}: TableWrapperFilterChipProps) => {
  const classes = useStyles();

  const chips = selectedFilters.map(
    ({ filterBy, filterType, filterTerm }: any, i: number) => {
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
