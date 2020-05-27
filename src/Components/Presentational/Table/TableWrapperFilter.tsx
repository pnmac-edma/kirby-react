import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Select,
  MenuItem,
  Button,
  TextField,
  InputLabel,
  FormControl
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 250
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
    marginTop: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1),
    display: 'block',
    width: '100%'
  }
}));

interface TableWrapperFilterProps {
  filter: Array<string> | null;
  filterForm: any;
  anchorEl: any;
  isFilterClick: boolean;
  setFilterForm: Function;
  setIsFilterClick: Function;
  setSelectedFilters: Function;
  setAnchorEl: Function;
}

const TableWrapperFilter = ({
  filter,
  filterForm,
  anchorEl,
  setAnchorEl,
  setIsFilterClick,
  isFilterClick,
  setFilterForm,
  setSelectedFilters
}: TableWrapperFilterProps) => {
  const classes = useStyles();

  const filterByOptions = filter
    ? filter.map((value, i) => {
        return (
          <MenuItem key={i} value={value}>
            {value}
          </MenuItem>
        );
      })
    : '';

  const filterTypeOptions = ['Contains', "Doesn't Contain", 'Equals'].map(
    (value, i) => {
      return (
        <MenuItem key={i} value={value}>
          {value}
        </MenuItem>
      );
    }
  );

  const handleClick = () => {
    setAnchorEl(null);
    setIsFilterClick(!isFilterClick);
    setSelectedFilters();
  };

  return (
    <>
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="filterBy">Filter By</InputLabel>
          <Select
            name="filterBy"
            value={filterForm.filterBy}
            defaultValue="Name"
            onChange={e => setFilterForm('filterBy', e.target.value)}
          >
            {filterByOptions}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="that">That</InputLabel>
          <Select
            name="filterType"
            displayEmpty
            value={filterForm.filterType}
            onChange={e => setFilterForm('filterType', e.target.value)}
          >
            {filterTypeOptions}
          </Select>
        </FormControl>
        <TextField
          id="filter-term"
          autoFocus
          label="Filter Term"
          className={classes.textField}
          margin="normal"
          name="filterTerm"
          value={filterForm.filterTerm}
          onChange={e => setFilterForm('filterTerm', e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={
            !filterForm.filterTerm ||
            !filterForm.filterBy ||
            !filterForm.filterType
          }
          onClick={handleClick}
        >
          Add Filter
        </Button>
      </form>
    </>
  );
};

export default TableWrapperFilter;
