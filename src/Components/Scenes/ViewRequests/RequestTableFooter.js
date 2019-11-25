import React from 'react';
import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  TablePagination
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const footerStyles = makeStyles(theme => ({
  table: {
    minWidth: 6,
    borderTop: `1px solid ${theme.palette.grey['300']}`
  }
}));

const RequestTableFooter = props => {
  const {
    children,
    count,
    rowsPerPage,
    page,
    onChangePage,
    onChangeRowsPerPage
  } = props;
  const classes = footerStyles();

  return (
    <Table className={classes.table} size="small">
      <TableBody>
        <TableRow>
          <TableCell>{children}</TableCell>
          <TableCell>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={count}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                'aria-label': 'previous page'
              }}
              nextIconButtonProps={{
                'aria-label': 'next page'
              }}
              onChangePage={onChangePage}
              onChangeRowsPerPage={onChangeRowsPerPage}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

RequestTableFooter.propTypes = {
  children: PropTypes.node,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func
};

export default RequestTableFooter;
