import React from 'react';
import { Table, Paper } from '@material-ui/core';
import TableHeadSectionContainer from '../TableHeadSection/TableHeadSection-Container';
import TableBodySectionContainer from '../TableBodySection/TableBodySection-Container';
import TableFooterSectionContainer from '../TableFooterSection/TableFooterSection-Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: theme.spacing(2)
  }
}));

const TableSection = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Paper>
          <div>
            <Table size="small" stickyHeader>
              <TableHeadSectionContainer />
              <TableBodySectionContainer />
              <TableFooterSectionContainer />
            </Table>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default TableSection;
