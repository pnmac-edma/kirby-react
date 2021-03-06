import React from 'react';
import {
  Paper,
  Table,
  TableCell,
  TableRow,
  TableBody
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: 12,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  table: {
    minWidth: 6
  },
  tableWrapper: {
    flexGrow: 1,
    height: '50vh',
    overflowX: 'auto',
    borderRadius: 'inherit'
  },
  tableBody: {
    width: '100%',
    display: 'table'
  }
}));

interface TableWrapperNotFoundProps {
  searchedInput: string;
}

const TableWrapperNotFound = ({ searchedInput }: TableWrapperNotFoundProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table} size="medium" stickyHeader>
          <TableBody className={classes.tableBody}>
            <TableRow>
              <TableCell colSpan={5}>
                We couldn't find anything matching{' '}
                <strong>'{searchedInput}'</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
};

export default TableWrapperNotFound;
