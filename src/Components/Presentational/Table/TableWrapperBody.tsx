import React, { useState } from 'react';
import {
  Checkbox,
  TableCell,
  TableBody,
  TableRow,
  Tooltip
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { color } from '@edma/design-tokens';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { stableSort, getSorting } from '../../../Utilities/utils';
import { Column, Datum } from './types';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {
  setRemoveSelectedRow,
  setRemoveGovernor
} from '../../../State/Governance/actions';
import Modal from '../Modal/Modal';

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
  // tableCell: {
  //   '&:hover': {
  //     display: 'none'
  //   }
  // }
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
  remove
}: TableWrapperBodyProps) => {
  const classes = tableStyles();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { governors, setSelectedRemoveRowId } = useSelector(
    (state: any) => state.governance
  );
  console.log('This is Remove', remove);
  const removeGovernor = governors.reduce((acc: any, governor: any) => {
    if (governor.Id === setSelectedRemoveRowId) {
      acc.push(
        <p key={governor.Id}>
          Are you sure that you want to remove{' '}
          <strong>{governor.governor}</strong> from the Governance group?
        </p>
      );
    }
    return acc;
  }, []);
  console.log('removeGoverno', removeGovernor);
  const setRemoveGovernors = () => dispatch(setRemoveGovernor());
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
        {remove && (
          <TableCell padding="checkbox">
            <Tooltip title="Delete" placement="top">
              <DeleteOutlineIcon
                color="inherit"
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
    <>
      {isModalOpen ? (
        <Modal
          modalTitle={'Remove Govenor'}
          render={removeGovernor}
          openModal={isModalOpen}
          handleModalToggle={setIsModalOpen}
          handleRemoveSelected={setRemoveGovernors}
        />
      ) : null}
      <TableBody>
        {sortedSlicedRequests.map((datum: Datum) => createRow(datum))}
      </TableBody>
    </>
  );
};

export default TableWrapperBody;

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
  remove: boolean;
}
