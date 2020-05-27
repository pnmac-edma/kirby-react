import React from 'react';
import { Tooltip, IconButton, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';
import { color } from '@edma/design-tokens';

const useStyles = makeStyles(theme => ({
  spacer: {
    flexGrow: 2,
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  },
  chip: {
    marginLeft: theme.spacing(0.5)
  },
  filterToggle: {
    marginRight: -16,

    '&:hover': {
      color: theme.palette.type === 'light' ? color.black : color.white
    }
  }
}));

interface TableWrapperFilterChipProps {
  selectedFilters: any;
  isFilterClick: boolean;
  anchorEl: any;
  setIsFilterClick: Function;
  setAnchorEl: Function;
  removeFilter: Function;
}

const TableWrapperFilterChip = ({
  selectedFilters,
  isFilterClick,
  anchorEl,
  setIsFilterClick,
  setAnchorEl,
  removeFilter
}: TableWrapperFilterChipProps) => {
  const classes = useStyles();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setIsFilterClick(!isFilterClick);
  };

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
          onClick={handleClick}
        >
          {isFilterClick ? <CloseIcon /> : <FilterListIcon />}
        </IconButton>
      </Tooltip>
    </>
  );
};

export default TableWrapperFilterChip;
