import React from 'react';
import {
  Button,
  Checkbox,
  Table,
  Paper,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  TablePagination,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import inboundRequests from '../../mockData';

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

const TableHeader = ({ columnNames }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox />
        </TableCell>
        {columnNames.map(name => (
          <TableCell>{name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const TableTitle = ({ title }) => {
  return (
    <Typography
      variant="h5"
      style={{
        color: 'black',
        textAlign: 'left',
        marginLeft: '20px',
        marginTop: '20px'
      }}
    >
      {title}
    </Typography>
  );
};

const Footer = ({ children }) => {
  const classes = useStyles();
  return (
    <Table className={classes.table} size="medium">
      <TableRow>
        <TableCell>
          <Button variant="contained" color="primary">
            Click Me
          </Button>
        </TableCell>
        <TableCell>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={10}
            rowsPerPage={5}
            page={0}
            backIconButtonProps={{
              'aria-label': 'previous page'
            }}
            nextIconButtonProps={{
              'aria-label': 'next page'
            }}
            onChangePage={() => {}}
            onChangeRowsPerPage={() => {}}
          />
        </TableCell>
      </TableRow>
    </Table>
  );
};

const InboxContainer = props => {
  const classes = useStyles();

  let reqs = inboundRequests.map(request => {
    return {
      ...request,
      requestdata: JSON.parse(request.requestdata)
    };
  });
  console.log(reqs);

  return (
    <React.Fragment>
      <TableTitle title="Requests Inbox" />
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} size="medium" stickyHeader>
            <TableHeader
              columnNames={['Request', 'Description', 'Date Requested']}
            />
            <TableBody>
              {reqs.map(request => {
                return (
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell align="left">
                      {request.requestdata.databasename}
                    </TableCell>
                    <TableCell align="left">
                      {request.requestdata.description}
                    </TableCell>
                    <TableCell align="left" style={{ width: '200px' }}>
                      {request.createddate}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <Footer />
      </Paper>
    </React.Fragment>
  );
};

export default InboxContainer;
