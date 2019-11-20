import React from 'react';
import {
  Button,
  Checkbox,
  Table,
  Paper,
  TableCell,
  TableBody,
  TableRow
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import inboundRequests from '../../../mockData';
import RequestTableTitle from './RequestTableTitle';
import RequestTableHeader from './RequestTableHeader';
import RequestTableFooter from './RequestTableFooter';

const useStyles = makeStyles(theme => ({
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

let reqs = inboundRequests.map(request => {
  const reqData = JSON.parse(request.requestdata);
  return {
    ...request,
    databasename: request.databasename || '',
    requestdata: reqData,
    description: reqData.description || ''
  };
});

const InboxContainer = props => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const tableColumns = [
    { name: 'Request', id: 0 },
    { name: 'Description', id: 1 },
    { name: 'Date Requested', id: 2 }
  ];
  const propertyMap = {
    0: 'databasename',
    1: 'description',
    2: 'createddate'
  };

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
      const newSelecteds = reqs.map(request => request.Id);
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

  function desc(a, b, orderBy) {
    const p = propertyMap[orderBy];
    let val1 = a[p];
    let val2 = b[p];
    if (typeof val1 === 'string' || typeof val2 === 'string') {
      val1 = val1.toLowerCase();
      val2 = val2.toLowerCase();
    }
    if (val2 > val1) {
      return -1;
    }
    if (val1 > val2) {
      return 1;
    }
    return 0;
  }

  function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  function getSorting(order, orderBy) {
    return order === 'desc'
      ? (a, b) => desc(a, b, orderBy)
      : (a, b) => -desc(a, b, orderBy);
  }

  return (
    <>
      <RequestTableTitle title="Requests Inbox" />
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
              rowCount={reqs.length}
            />
            <TableBody>
              {stableSort(reqs, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(request => {
                  const isChecked = isSelected(request.Id);
                  return (
                    <TableRow key={request.Id}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isChecked}
                          onClick={e => handleToggleCheckbox(e, request.Id)}
                        />
                      </TableCell>
                      <TableCell align="left">{request.databasename}</TableCell>
                      <TableCell align="left">{request.description}</TableCell>
                      <TableCell align="left" style={{ width: '200px' }}>
                        {request.createddate}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <RequestTableFooter
          count={reqs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={(e, newPage) => setPage(newPage)}
          onChangeRowsPerPage={e => {
            console.log(e.target.value);
            setRowsPerPage(parseInt(e.target.value), 10);
            setPage(0);
          }}
        >
          <Button variant="contained" color="primary">
            Custom Button
          </Button>
        </RequestTableFooter>
      </Paper>
    </>
  );
};

export default InboxContainer;
