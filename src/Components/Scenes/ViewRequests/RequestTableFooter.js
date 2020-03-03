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
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const footerStyles = makeStyles(theme => ({
  table: {
    minWidth: 6,
    borderTop: `1px solid ${theme.palette.grey['300']}`
  },
  underline: {
    textDecoration: 'none'
  }
}));

const RequestTableFooter = props => {
  const {
    children,
    count,
    rowsPerPage,
    page,
    onChangePage,
    onChangeRowsPerPage,
    linkTo
  } = props;
  const classes = footerStyles();
  const location = useLocation();
  return (
    <Table className={classes.table} size="small">
      <TableBody>
        <TableRow>
          <TableCell>
            <Link
              to={linkTo ? `${linkTo}` : location}
              className={classes.underline}
            >
              {children}
            </Link>
          </TableCell>
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

RequestTableFooter.propTypes = {
  children: PropTypes.node,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func
};

export default RequestTableFooter;
