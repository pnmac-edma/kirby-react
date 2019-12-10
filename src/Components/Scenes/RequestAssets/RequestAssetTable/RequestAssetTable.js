import React, { useState } from 'react';
import { Table, Paper } from '@material-ui/core';
import TableBodySectionContainer from '../TableBodySection/TableBodySection-Container';
import { makeStyles } from '@material-ui/core/styles';
import RequestTableFooterContainer from '../../ViewRequests/RequestTableFooter';
import RequestTableHeaderContainer from '../../ViewRequests/RequestTableHeader';
import RemoveSelectedButtonContainer from '../RemoveSelectedButton/RemoveSelectedButton-Container';
import TableBodySection from '../TableBodySection/TableBodySection-Container';
import RequestTableBodyContainer from '../../ViewRequests/RequestTableBody';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: theme.spacing(2)
  }
}));
const tableColumns = [
  { name: 'Name', property: 'name' }, // placeholder from name property
  { name: 'Domain', property: 'domain' },
  { name: 'Date Created', property: 'createddate' }
];

const TableSection = props => {
  const {
    selectedSearchResultCopy,
    selectedAll,
    requestCheckBoxSelect
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
  const [rowsPerPage, setRowsPerPage] = useState(2);

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
  const handleChangeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value), 10);
    setPage(0);
  };

  const numSelected = selectedSearchResultCopy.filter(val => val.chec).length;
  return (
    <div className={classes.root}>
      <div>
        <Paper>
          <div>
            <Table size="small" stickyHeader>
              <RequestTableHeaderContainer
                columns={tableColumns}
                order={order}
                orderBy={orderBy}
                numSelected={numSelected}
                rowCount={selectedSearchResultCopy.length}
                onSelectAllClick={requestCheckBoxSelect}
                onSort={handleSortClick}
              />
              <RequestTableBodyContainer
                columns={tableColumns}
                requests={selectedSearchResultCopy}
                isSelected={isSelected}
                page={page}
                rowsPerPage={rowsPerPage}
                order={order}
                orderBy={orderBy}
                handleCheckboxClick={requestCheckBoxSelect}
              />
            </Table>
          </div>
          <RequestTableFooterContainer
            count={selectedSearchResultCopy.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={(e, newPage) => setPage(newPage)}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            children={<RemoveSelectedButtonContainer />}
          />
        </Paper>
      </div>
    </div>
  );
};

export default TableSection;
//<TableBodySectionContainer />
//<TableBodySectionContainer />
// <RequestTableBodyContainer
// columns={tableColumns}
// requests={selectedSearchResultCopy}
// isSelected={isSelected}
// page={page}
// rowsPerPage={rowsPerPage}
// order={order}
// orderBy={orderBy}
// handleCheckboxClick={requestCheckBoxSelect}
// />

// isSelect(rec.chec)
