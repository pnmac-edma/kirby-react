import React, { useState } from 'react';
import { Table, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RequestTableFooterContainer from '../../ViewRequests/RequestTableFooter';
import RequestTableHeaderContainer from '../../ViewRequests/RequestTableHeader';
import RemoveSelectedButtonContainer from '../RemoveSelectedButton/RemoveSelectedButton-Container';
import RequestTableBodyContainer from '../../ViewRequests/RequestTableBody';
import RequestTableContainer from '../../ViewRequests/RequestTable';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: 0,
    marginBottom: 16,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  table: {
    minWidth: 10
  },
  tableWrapper: {
    overflow: 'auto',
    height: '40vh',
    width: '112vm'
  },
  typography: {
    color: theme.palette.common.black,
    textAlign: 'left',
    margin: 14
  }
}));
const tableColumns = [
  { name: 'Name', property: 'name' },
  { name: 'Date Created', property: 'createddate' }
];

const TableSection = props => {
  const {
    selectedSearchResultCopy,
    requestCheckBoxSelect,
    handleModalToggle
  } = props;
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [order, setOrder] = useState(
    tableColumns.reduce((acc, column) => {
      return { ...acc, [column.property]: 'desc' };
    }, {})
  );
  const [orderBy, setOrderBy] = useState(tableColumns[0].property);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const isSelected = id => selected.indexOf(id) !== -1;
  const handleSortClick = (event, property) => {
    if (orderBy === property) {
      setOrder({
        ...order,
        [property]: order[property] === 'asc' ? 'desc' : 'asc'
      });
      return;
    }
    setOrderBy(property);
  };
  const handleChangeRowsPerPage = (e, id) => {
    setRowsPerPage(parseInt(e.target.value), 10);
    const selectedIndex = selected.indexOf(id);
    let newSelected = [...selected];

    if (selectedIndex === -1) {
      newSelected.push(id);
    } else {
      newSelected.splice(selectedIndex, 1);
    }
    setSelected(newSelected);
    setPage(0);
  };

  const numSelected = selectedSearchResultCopy.filter(val => val.chec).length;
  const setFooterButtonText = selectedSearchResultCopy =>
    `${selectedSearchResultCopy.length} request${
      selectedSearchResultCopy.length !== 1 ? 's' : ''
    } selected`;
  console.log('kskskksk', selectedSearchResultCopy);
  return (
    <RequestTableContainer
      tableColumns={tableColumns}
      title={
        <Typography className={classes.typography} variant="h5">
          Assets in this request
        </Typography>
      }
      linkTo={undefined}
      requests={selectedSearchResultCopy}
      handleRequestClick={(e, id) => console.log(`request ${id} clicked`)}
      setFooterButtonText={setFooterButtonText}
      // children={<RemoveSelectedButtonContainer />}
      handleFooterButtonClick={handleModalToggle}
    />
  );
};

export default TableSection;

// <Paper className={classes.paper}>
// <Typography className={classes.typography} variant="h5">
//   Assets in this request
// </Typography>
// <div className={classes.tableWrapper}>
//   <Table
//     className={classes.table}
//     size="medium"
//     aria-label="sticky table"
//     stickyHeader
//   >
//     <RequestTableHeaderContainer
//       columns={tableColumns}
//       order={order}
//       orderBy={orderBy}
//       numSelected={numSelected}
//       rowCount={selectedSearchResultCopy.length}
//       onSelectAllClick={requestCheckBoxSelect}
//       onSort={handleSortClick}
//     />
//     <RequestTableBodyContainer
//       columns={tableColumns}
//       requests={selectedSearchResultCopy}
//       isSelected={isSelected}
//       page={page}
//       rowsPerPage={rowsPerPage}
//       order={order}
//       orderBy={orderBy}
//       handleCheckboxClick={requestCheckBoxSelect}
//     />
//   </Table>
// </div>
// <RequestTableFooterContainer
//   count={selectedSearchResultCopy.length}
//   rowsPerPage={rowsPerPage}
//   page={page}
//   onChangePage={(e, newPage) => setPage(newPage)}
//   onChangeRowsPerPage={handleChangeRowsPerPage}
//   children={<RemoveSelectedButtonContainer />}
// />
// </Paper>
