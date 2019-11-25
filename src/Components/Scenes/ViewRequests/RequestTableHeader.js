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
    onSelectAllClick,
    onSort,
    order,
    orderBy,
    numSelected,
    rowCount
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
      id: PropTypes.number
    })
  ).isRequired,
  numSelected: PropTypes.number.isRequired,
  onSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  //order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

export default RequestTableHeader;
