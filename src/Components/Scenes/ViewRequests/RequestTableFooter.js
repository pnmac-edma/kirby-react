import React from 'react';
import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  TablePagination
} from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const RequestTableFooter = ({ classes, children }) => {
  return (
    <Table className={classes.table} size="small">
      <TableBody>
        <TableRow>
          <TableCell>{children}</TableCell>
          <TableCell>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={10}
              rowsPerPage={5}
              page={0}
              backIconButtonProps={{
                'aria-label': 'previous page'
              }}
              nextIconButtonProps={{
                'aria-label': 'next page'
              }}
              onChangePage={() => {}}
              onChangeRowsPerPage={() => {}}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default RequestTableFooter;
