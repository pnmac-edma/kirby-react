import React from 'react';
import {
  Checkbox,
  TableCell,
  TableBody,
  TableRow,
  Tooltip
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { color } from '@edma/design-tokens';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { stableSort, getSorting } from '../../../Utilities/utils';
import { Column, Datum } from './types';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { setRemoveSelectedRow } from '../../../State/Governance/actions';

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
  firstColLink: {
    color: theme.palette.type === 'light' ? color.b600 : color.b200,
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
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
  },
  hover: {
    opacity: 0,
    '&:hover': {
      opacity: 1
    }
  }
}));

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
  rowsPerPage,
  remove,
  setIsModalOpen
}: TableWrapperBodyProps) => {
  const classes = tableStyles();
  const dispatch = useDispatch();
  const getCellProps = (datum: Datum, col: Column, i: number) => {
    let className, onClickFunc;
    if (i === 0) {
      className = `${classes.firstCol} ${
        setFirstColLink ? classes.firstColLink : ''
      }`;
      onClickFunc = setFirstColLink
        ? (e: React.ChangeEvent<HTMLInputElement>) =>
            setFirstColLink(e, datum.Id)
        : undefined;
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
        {remove && (
          <TableCell padding="checkbox">
            <Tooltip title="Delete" placement="top">
              <DeleteOutlineIcon
                color="inherit"
                className={classes.hover}
                id={`${datum.Id}`}
                onClick={() => {
                  dispatch(setRemoveSelectedRow(Number(datum.Id)));
                  setIsModalOpen(true);
                }}
              />
            </Tooltip>
          </TableCell>
        )}
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

interface TableWrapperBodyProps {
  columns: Array<Column>;
  setToggleCheckbox: Function | null;
  setFirstColLink: Function | null;
  setSelected: Function;
  selected: Array<any>;
  order: any;
  orderBy: string;
  page: number;
  data: Array<Datum>;
  rowsPerPage: number;
  remove: boolean;
  setIsModalOpen: Function;
}
