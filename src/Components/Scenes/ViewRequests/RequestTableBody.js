import React from 'react';
import { Checkbox, TableCell, TableBody, TableRow } from '@material-ui/core';
import colors from '@edma/design-tokens/js/color';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { stableSort, getSorting } from '../../../Utilities/utils';

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
    color: colors['r800']
  },
  statusPending: {
    fontStyle: 'italic',
    color: colors['g600']
  },
  selectedRow: {
    backgroundColor: colors['b50']
  }
}));

const RequestTableBody = props => {
  const {
    columns,
    page,
    rowsPerPage,
    requests,
    isSelected,
    order,
    orderBy,
    handleCheckboxClick,
    handleRequestClick
  } = props;
  const classes = tableStyles();

  const getCellProps = (request, col, i) => {
    let className, onClickFunc;
    if (i === 0) {
      className = classes.firstCol;
      onClickFunc = e => handleRequestClick(e, request.Id);
    }
    if (col.name.toLowerCase() === 'description')
      className = classes.descriptionCol;
    if (col.name.toLowerCase() === 'status')
      className =
        {
          rejected: classes.statusRejected,
          pending: classes.statusPending
        }[request[col.property].toLowerCase()] || null;

    return [className, onClickFunc];
  };

  const sortedSlicedRequests = stableSort(
    requests,
    getSorting(order, orderBy)
  ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const createRow = request => {
    return (
      <TableRow
        key={request.Id}
        className={clsx({ [classes.selectedRow]: isSelected(request.Id) })}
      >
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            id={`${request.Id}`}
            checked={request.chec || isSelected(request.Id)}
            onClick={e => handleCheckboxClick(e, request.Id)}
          />
        </TableCell>
        {columns.map((col, i) => createRowCells(request, col, i))}
      </TableRow>
    );
  };

  const createRowCells = (request, col, i) => {
    const [className, onClickFunc] = getCellProps(request, col, i);
    return (
      <TableCell
        key={i}
        className={className}
        align="left"
        onClick={onClickFunc}
      >
        {request[col.property]}
      </TableCell>
    );
  };

  return (
    <TableBody>
      {sortedSlicedRequests.map(request => createRow(request))}
    </TableBody>
  );
};

RequestTableBody.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      property: PropTypes.string
    })
  ),
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      // placeholder for name property
      description: PropTypes.string,
      requeststatus: PropTypes.string,
      govstatus: PropTypes.string,
      createddate: PropTypes.string
    })
  ),
  isSelected: PropTypes.func,
  order: PropTypes.any,
  orderBy: PropTypes.string,
  handleCheckboxClick: PropTypes.func,
  handleRequestClick: PropTypes.func
};

export default RequestTableBody;
