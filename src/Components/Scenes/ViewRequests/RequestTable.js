import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Table, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RequestTableHeader from './RequestTableHeader';
import RequestTableFooter from './RequestTableFooter';
import RequestTableBody from './RequestTableBody';

const tableStyles = makeStyles(theme => ({
  paper: {
    width: '96%',
    marginLeft: 8,
    marginRight: 8
  },
  table: {
    minWidth: 6
  },
  tableWrapper: {
    maxHeight: 776,
    overflowX: 'auto',
    borderRadius: 'inherit'
  }
}));

const RequestTable = props => {
  const { tableColumns, requests } = props;

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(0);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const classes = tableStyles();

  const isSelected = id => selected.indexOf(id) !== -1;

  const handleToggleCheckbox = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [...selected];

    if (selectedIndex === -1) {
      newSelected.push(id);
    } else {
      newSelected.splice(selectedIndex, 1);
    }
    setSelected(newSelected);
  };

  const handleToggleAllCheckbox = event => {
    if (selected.length === 0) {
      const newSelecteds = requests.map(request => request.Id);
      setSelected(newSelecteds);
      return;
    } else {
      setSelected([]);
    }
  };

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
            requests={requests}
            isSelected={isSelected}
            page={page}
            rowsPerPage={rowsPerPage}
            order={order}
            orderBy={orderBy}
            handleCheckboxClick={handleToggleCheckbox}
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
        <Button variant="contained" color="primary">
          Custom Button
        </Button>
      </RequestTableFooter>
    </Paper>
  );
};

export default RequestTable;
