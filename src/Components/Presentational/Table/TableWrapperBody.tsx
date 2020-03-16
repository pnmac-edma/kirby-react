import React from 'react';
import { Checkbox, TableCell, TableBody, TableRow } from '@material-ui/core';
import { color } from '@edma/design-tokens';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { stableSort, getSorting } from '../../../Utilities/utils';
import { Column, Datum } from './types';

const tableStyles = makeStyles(theme => ({
  cell: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold'
  },
  firstCol: {
    minWidth: '15vw',
    maxWidth: '15vw',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  descriptionCol: {
    width: '60%'
  },
  statusRejected: {
    color: color.r800
  },
  statusPending: {
    fontStyle: 'italic',
    color: color.g600
  },
  selectedRow: {
    backgroundColor: color.b50
  }
}));

interface TableWrapperBodyProps {
  columns: Array<Column>;
  setToggleCheckbox: Function | null;
  setFirstColLink: Function;
  setSelected: Function;
  selected: Array<any>;
  order: any;
  orderBy: string;
  page: number;
  data: Array<Datum>;
  rowsPerPage: number;
}

const TableWrapperBody = ({
  columns,
  setToggleCheckbox,
  setFirstColLink,
  setSelected,
  selected,
  order,
  orderBy,
  page,
  data,
  rowsPerPage
}: TableWrapperBodyProps) => {
  const classes = tableStyles();

  const getCellProps = (datum: Datum, col: Column, i: number) => {
    let className, onClickFunc;
    if (i === 0) {
      className = classes.firstCol;
      onClickFunc = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFirstColLink(e, datum.Id);
    }
    if (col.name.toLowerCase() === 'description') {
      className = classes.descriptionCol;
    }
    if (col.name.toLowerCase() === 'status') {
      className =
        ({
          rejected: classes.statusRejected,
          pending: classes.statusPending
        } as any)[datum[col.property].toLowerCase()] || null;
    }
    return [className, onClickFunc];
  };

  const sortedSlicedRequests = stableSort(
    data,
    getSorting(order, orderBy)
  ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const createRow = (datum: Datum) => {
    return (
      <TableRow
        key={datum.Id}
        className={clsx({
          [`Table__row--is-selected ${classes.selectedRow}`]: setSelected(
            datum.Id
          )
        })}
      >
        {setToggleCheckbox && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              id={`${datum.Id}`}
              checked={datum.chec || setSelected(datum.Id)}
              onClick={() => setToggleCheckbox(selected, datum.Id)}
            />
          </TableCell>
        )}
        {columns.map((col, i) => createRowCells(datum, col, i))}
      </TableRow>
    );
  };
  const createRowCells = (datum: Datum, col: Column, i: number) => {
    const [className, onClickFunc] = getCellProps(datum, col, i);
    return (
      <TableCell
        key={i}
        className={className}
        align="left"
        onClick={onClickFunc}
      >
        {datum[col.property]}
      </TableCell>
    );
  };

  return (
    <TableBody>
      {sortedSlicedRequests.map((datum: Datum) => createRow(datum))}
    </TableBody>
  );
};

export default TableWrapperBody;
