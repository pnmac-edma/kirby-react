import React from 'react';
import { Table, Paper, TableFooter, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TableHeadTitle from '../TableHeadTitle/TableHeadTitle-Container';
import TableHeadSectionContainer from '../TableHeadSection/TableHeadSection-Container';
import TableBodySectionContainer from './../TableBody/TableBodySection-Container';
import NotFoundContainer from './../NotFound/NotFound-Container';
import CheckBoxButtonContainer from '../CheckBoxButton/CheckBoxButton-Container';
import NotFoundFilterContainer from '../NotFoundFilter/NotFoundFilter-Container';

const useStyles = makeStyles(theme => ({
  root: {
    width: '96%',
    marginLeft: 8,
    marginRight: 8
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(4)
  },
  table: {
    minWidth: 6
  },
  tableWrapper: {
    maxHeight: 776,
    overflowX: 'auto'
  }
}));

const TableSection = props => {
  const { searchResult, isFilterQueriesEmpty } = props;
  const classes = useStyles();

  return (
    <div>
      {searchResult.results === undefined ? (
        <NotFoundContainer />
      ) : (
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <TableHeadTitle />
            <Table className={classes.table} size="small" stickyHeader>
              <TableHeadSectionContainer />
              {isFilterQueriesEmpty ? (
                <NotFoundFilterContainer />
              ) : (
                <TableBodySectionContainer />
              )}
              <TableFooter>
                <TableRow>
                  <td>
                    <CheckBoxButtonContainer />
                  </td>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </Paper>
      )}
    </div>
  );
};

export default TableSection;
