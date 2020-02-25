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
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const SearchFilter = props => {
  const classes = useStyles();
  const {
    handleFilterSelect,
    filterBy,
    filterType,
    filterTerm,
    handleFilterRequest,
    selectors
  } = props;
  const selected = [];
  selectors.forEach((value, index) => {
    selected.push(
      <MenuItem key={index} value={value.toLowerCase()}>
        {value}
      </MenuItem>
    );
  });

  return (
    <React.Fragment>
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="filterBy">Filter By</InputLabel>
          <Select
            name="filterBy"
            value={filterBy}
            onChange={e => handleFilterSelect(e)}
          >
            {selected.slice(0, 4)}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="that">That</InputLabel>
          <Select
            name="filterType"
            value={filterType}
            onChange={e => handleFilterSelect(e)}
          >
            {selected.slice(4, selected.length)}
          </Select>
        </FormControl>
        <TextField
          id="filter-term"
          label="Filter Term"
          className={classes.textField}
          margin="normal"
          name="filterTerm"
          value={filterTerm}
          onChange={e =>
            handleFilterSelect({
              target: { value: e.target.value, name: e.target.name }
            })
          }
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={!filterTerm || !filterBy || !filterType}
          onClick={() => handleFilterRequest()}
        >
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};

export default SearchFilter;
