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

const useStyles = makeStyles((theme: any) => ({
  table: {
    minWidth: 6,
    borderTop: `1px solid`,
    borderColor: theme.palette.type === 'light' ? color.g200 : color.g600
  },
  underline: {
    textDecoration: 'none'
  }
}));

interface TableWrapperFooterProps {
  children: React.ReactNode;
  count: number;
  rowsPerPage: number;
  page: number;
  onChangePage: any;
  onChangeRowsPerPage: any;
}

const TableWrapperFooter = ({
  children,
  count,
  rowsPerPage,
  page,
  onChangePage,
  onChangeRowsPerPage
}: TableWrapperFooterProps) => {
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

export default TableWrapperFooter;
