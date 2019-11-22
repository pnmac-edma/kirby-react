import React, { useState } from 'react';
import { Button, Table, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RequestTableHeader from './RequestTableHeader';
import RequestTableFooter from './RequestTableFooter';
import RequestTableBody from './RequestTableBody';

const tableStyles = makeStyles(theme => ({
  paper: {
    marginLeft: 12,
    marginRight: 12
  },
  table: {
    minWidth: 6
  },
  tableWrapper: {
    maxHeight: 500,
    overflowX: 'auto',
    borderRadius: 'inherit'
  }
}));

const RequestTable = props => {
  const {
    tableColumns,
    requests,
    selected,
    footerButtonText,
    handleFooterButtonClick,
    handleToggleAllCheckbox,
    handleToggleCheckbox
  } = props;

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(tableColumns[0].property);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const classes = tableStyles();

  const isSelected = id => selected.indexOf(id) !== -1;

  const handleSortClick = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  return (
    <Paper className={classes.paper}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table} size="medium" stickyHeader>
          <RequestTableHeader
            columns={tableColumns}
            onSelectAllClick={handleToggleAllCheckbox}
            onSort={handleSortClick}
            order={order}
            orderBy={orderBy}
            numSelected={selected.length}
            rowCount={requests.length}
          />
          <RequestTableBody
            columns={tableColumns}
            requests={requests}
            isSelected={isSelected}
            page={page}
            rowsPerPage={rowsPerPage}
            order={order}
            orderBy={orderBy}
            handleCheckboxClick={handleToggleCheckbox}
            handleRequestClick={(e, id) => {
              console.log(id);
            }}
          />
        </Table>
      </div>
      <RequestTableFooter
        count={requests.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={(e, newPage) => setPage(newPage)}
        onChangeRowsPerPage={e => {
          setRowsPerPage(parseInt(e.target.value), 10);
          setPage(0);
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleFooterButtonClick}
          disabled={selected.length === 0}
        >
          {footerButtonText}
        </Button>
      </RequestTableFooter>
    </Paper>
  );
};

export default RequestTable;
