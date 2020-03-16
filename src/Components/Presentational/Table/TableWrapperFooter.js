import React from 'react';
import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  TablePagination
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { color } from '@edma/design-tokens';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 6,
    borderTop: `1px solid`,
    borderColor: theme.palette.type === 'light' ? color.g200 : color.g600,

    '& .MuiTableRow-root:hover': {
      background: theme.palette.type === 'light' ? color.white : color.g700
    }
  },
  underline: {
    textDecoration: 'none'
  }
}));

const TableWrapperFooter = props => {
  const {
    children,
    count,
    rowsPerPage,
    page,
    onChangePage,
    onChangeRowsPerPage
  } = props;
  const classes = useStyles();
  return (
    <Table className={classes.table} size="small">
      <TableBody>
        <TableRow>
          <TableCell>{children}</TableCell>
          <TableCell>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
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

TableWrapperFooter.propTypes = {
  children: PropTypes.node,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func
};

export default TableWrapperFooter;
