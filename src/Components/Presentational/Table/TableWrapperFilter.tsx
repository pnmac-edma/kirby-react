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
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    marginTop: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

interface TableWrapperFilterProps {
  filter: Array<string> | null;
  filterForm: any;
  setFilterForm: Function;
  setSelectedFilters: Function;
}

const TableWrapperFilter = ({
  filter,
  filterForm,
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

  return (
    <>
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="filterBy">Filter By</InputLabel>
          <Select
            name="filterBy"
            value={filterForm.filterBy}
            onChange={e => setFilterForm('filterBy', e.target.value)}
          >
            {filterByOptions}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="that">That</InputLabel>
          <Select
            name="filterType"
            value={filterForm.filterType}
            onChange={e => setFilterForm('filterType', e.target.value)}
          >
            {filterTypeOptions}
          </Select>
        </FormControl>
        <TextField
          id="filter-term"
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
          onClick={() => setSelectedFilters()}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default TableWrapperFilter;
