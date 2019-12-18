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
    backgroundColor: theme.palette.common.white,
    whiteSpace: 'nowrap'
  },
  indeterminate: {
    color: theme.palette.primary.main
  }
}));

const RequestTableHeader = props => {
  const {
    columns,
    order,
    orderBy,
    numSelected,
    rowCount,
    onSelectAllClick,
    onSort
  } = props;
  const classes = headerStyles();

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" className={classes.cell}>
          <Checkbox
            classes={{ indeterminate: classes.indeterminate }}
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onClick={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all requests' }}
            id="all"
          />
        </TableCell>
        {columns.map(col => (
          <TableCell
            className={classes.cell}
            key={col.property}
            sortDirection={order[col.property]}
          >
            <TableSortLabel
              active={orderBy === col.property}
              direction={order[col.property]}
              onClick={e => onSort(e, col.property)}
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
      property: PropTypes.string
    })
  ),
  order: PropTypes.any,
  orderBy: PropTypes.string,
  numSelected: PropTypes.number,
  rowCount: PropTypes.number,
  onSelectAllClick: PropTypes.func,
  onSort: PropTypes.func
};

export default RequestTableHeader;
