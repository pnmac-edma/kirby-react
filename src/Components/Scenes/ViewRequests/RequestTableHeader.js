import React from 'react';
import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles(theme => ({
  cell: {
    backgroundColor: 'transparent'
  }
}));

const RequestTableHeader = props => {
  const {
    columns,
    onSelectAllClick,
    onSort,
    order,
    orderBy,
    numSelected,
    rowCount
  } = props;
  const classes = headerStyles();
  const createSortHandler = property => event => {
    onSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" className={classes.cell}>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onClick={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all requests' }}
          />
        </TableCell>
        {columns.map(col => (
          <TableCell
            className={classes.cell}
            key={col.id}
            sortDirection={orderBy === col.id ? order : false}
          >
            <TableSortLabel
              className={classes.label}
              active={orderBy === col.id}
              direction={order}
              onClick={createSortHandler(col.id)}
            >
              <strong>{col.name}</strong>
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

RequestTableHeader.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number
    })
  ).isRequired,
  numSelected: PropTypes.number.isRequired,
  onSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired
};

export default RequestTableHeader;
