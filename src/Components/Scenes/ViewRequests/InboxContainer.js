import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
import { approverRequestsFetch } from '../../../State/ViewRequests/actions';

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

const requests = [
  {
    Id: 2,
    createddate: '2019-08-24 17:08:45',
    createdbyemail: 'jonathan.delarosa@pnmac.com',
    databasename: 'new_api_test',
    requesttype: 'Database',
    requestaction: 'Create',
    requeststatus: 'Approved',
    updateddate: '2019-08-24 17:08:56',
    updatedbyemail: null,
    approver: 'jonathan.delarosa@pnmac.com',
    requestdata:
      '{"owner": "jonathan.delarosa@pnmac.com", "kw": {}, "mod_id": null, "gov": true, "updatedbyemail": "jonathan.delarosa@pnmac.com", "updateddate": null, "sensitivity": "non-sensitive", "justification": "test", "description": "test", "domain": "demo_jon", "databasename": "new_api_test", "createdbyemail": "jonathan.delarosa@pnmac.com"}'
  },
  {
    Id: 3,
    createddate: '2019-08-26 00:42:29',
    createdbyemail: 'jonathan.delarosa@pnmac.com',
    databasename: 'test1',
    requesttype: 'Database',
    requestaction: 'Create',
    requeststatus: 'Approved',
    updateddate: '2019-08-26 00:43:10',
    updatedbyemail: null,
    approver: 'jonathan.delarosa@pnmac.com',
    requestdata:
      '{"owner": "jonathan.delarosa@pnmac.com", "kw": {}, "mod_id": null, "gov": true, "updatedbyemail": "jonathan.delarosa@pnmac.com", "updateddate": null, "sensitivity": "non-sensitive", "justification": "sfdg", "description": "dfgertg", "domain": "demo_jon", "databasename": "test1", "createdbyemail": "jonathan.delarosa@pnmac.com"}'
  }
];

const InboxContainer = props => {
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(0);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { approverRequestsFetch } = props;

  useEffect(() => {
    console.log('effect!');
    approverRequestsFetch();
  });

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

const mapStateToProps = ({ searchResult }) => {
  return {
    searchInput: searchResult.searchInput,
    isSearchClicked: searchResult.isSearchClicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    approverRequestsFetch: () => dispatch(approverRequestsFetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InboxContainer);
