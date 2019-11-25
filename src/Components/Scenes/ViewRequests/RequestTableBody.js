import React from 'react';
import { Checkbox, TableCell, TableBody, TableRow } from '@material-ui/core';
import colors from '@edma/design-tokens/js/color';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const stableSort = (array, cmp) => {
  const stableArray = array.map((el, index) => [el, index]);
  stableArray.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stableArray.map(el => el[0]);
};

const desc = (a, b, orderBy) => {
  let val1 = a[orderBy];
  let val2 = b[orderBy];
  if (typeof val1 === 'string' || typeof val2 === 'string') {
    val1 = val1.toLowerCase();
    val2 = val2.toLowerCase();

    if (orderBy.toLowerCase().includes('date')) {
      val1 = new Date(val1);
      val2 = new Date(val2);
    }
  }
  if (val2 > val1) return -1;
  if (val1 > val2) return 1;
  return 0;
};

const getSorting = (order, orderBy) => {
  return order[orderBy] === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
};

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

  const sortedSlicedRequests = stableSort(
    requests,
    getSorting(order, orderBy)
  ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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

  return (
    <TableBody>
      {sortedSlicedRequests.map(request => {
        return (
          <TableRow
            key={request.Id}
            className={clsx({ [classes.selectedRow]: isSelected(request.Id) })}
          >
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                checked={isSelected(request.Id)}
                onClick={e => handleCheckboxClick(e, request.Id)}
              />
            </TableCell>
            {columns.map((col, i) => {
              const [className, onClickFunc] = getCellProps(request, col, i);
              return (
                <TableCell
                  key={request[col.property]}
                  className={className}
                  align="left"
                  onClick={onClickFunc}
                >
                  {request[col.property]}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
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
  requests: PropTypes.any,
  isSelected: PropTypes.func,
  order: PropTypes.any,
  orderBy: PropTypes.string,
  handleCheckboxClick: PropTypes.func,
  handleRequestClick: PropTypes.func
};

export default RequestTableBody;
