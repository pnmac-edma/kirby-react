import React from 'react';
import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from '@material-ui/core';
import { color } from '@edma/design-tokens';
import { makeStyles } from '@material-ui/core/styles';
import { Column, Datum } from './types';

const useStyles = makeStyles(theme => ({
  cell: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.common.white : color.g700,
    whiteSpace: 'nowrap'
  },
  indeterminate: {
    color: theme.palette.primary.main
  }
}));

interface TableWrapperColumnHeadersProps {
  columns: Array<Column>;
  data: Array<Datum>;
  order: any;
  orderBy: string;
  numSelected: number;
  rowCount: number;
  setToggleAllCheckbox: Function | null;
  onSort: Function;
  selected: Array<any>;
}

const TableWrapperColumnHeaders = ({
  columns,
  data,
  order,
  orderBy,
  numSelected,
  rowCount,
  setToggleAllCheckbox,
  onSort,
  selected
}: TableWrapperColumnHeadersProps) => {
  const classes = useStyles();

  return (
    <TableHead>
      <TableRow>
        {setToggleAllCheckbox && (
          <TableCell padding="checkbox" className={classes.cell}>
            <Checkbox
              classes={{ indeterminate: classes.indeterminate }}
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onClick={() => setToggleAllCheckbox(selected, data)}
              inputProps={{ 'aria-label': 'select all requests' }}
              id="all"
            />
          </TableCell>
        )}
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

export default TableWrapperColumnHeaders;
