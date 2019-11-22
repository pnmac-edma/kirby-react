import React from 'react';
import { Checkbox, TableCell, TableBody, TableRow } from '@material-ui/core';

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
  const p = {
    0: 'databasename',
    1: 'description',
    2: 'requeststatus',
    3: 'createddate'
  }[orderBy];

  let val1 = a[p];
  let val2 = b[p];
  if (typeof val1 === 'string' || typeof val2 === 'string') {
    val1 = val1.toLowerCase();
    val2 = val2.toLowerCase();
    // need to convert any date string to date type to sort properly
    if (p.includes('date')) {
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
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
};

const RequestTableBody = props => {
  const {
    page,
    rowsPerPage,
    requests,
    isSelected,
    order,
    orderBy,
    handleCheckboxClick
  } = props;

  return (
    <TableBody>
      {stableSort(requests, getSorting(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(request => {
          return (
            <TableRow key={request.Id}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isSelected(request.Id)}
                  onClick={e => handleCheckboxClick(e, request.Id)}
                />
              </TableCell>
              {/* TODO: How to make this dynamically choose fields? */}
              <TableCell align="left">{request.databasename}</TableCell>
              <TableCell align="left">{request.description}</TableCell>
              <TableCell align="left">{request.requeststatus}</TableCell>
              <TableCell align="left" style={{ width: '200px' }}>
                {request.createddate}
              </TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  );
};

export default RequestTableBody;
