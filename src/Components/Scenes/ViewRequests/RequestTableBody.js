import React from 'react';
import { Checkbox, TableCell, TableBody, TableRow } from '@material-ui/core';
import colors from '@edma/design-tokens/js/color';
import { makeStyles } from '@material-ui/core/styles';

const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
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
  if (val2 > val1) {
    return -1;
  }
  if (val1 > val2) {
    return 1;
  }
  return 0;
};

const getSorting = (order, orderBy) => {
  return order[orderBy] === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
};

const RequestTableBody = props => {
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

  return (
    <TableBody>
      {stableSort(requests, getSorting(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(request => {
          return (
            <TableRow
              key={request.Id}
              className={isSelected(request.Id) ? classes.selectedRow : null}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={isSelected(request.Id)}
                  onClick={e => handleCheckboxClick(e, request.Id)}
                />
              </TableCell>
              {columns.map((col, i) => {
                let className, onClick;
                if (i === 0) {
                  className = classes.firstCol;
                  onClick = e => handleRequestClick(e, request.Id);
                }

                if (col.name.toLowerCase() === 'description')
                  className = classes.descriptionCol;
                if (col.name.toLowerCase() === 'status')
                  className =
                    {
                      rejected: classes.statusRejected,
                      pending: classes.statusPending
                    }[request[col.property].toLowerCase()] || null;
                return (
                  <TableCell
                    className={className}
                    align="left"
                    key={request[col.property]}
                    onClick={onClick}
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

export default RequestTableBody;
