import React, { useState } from 'react';
import { Table, Paper } from '@material-ui/core';
import TableHeadSectionContainer from '../TableHeadSection/TableHeadSection-Container';
import TableBodySectionContainer from '../TableBodySection/TableBodySection-Container';
import TableFooterSectionContainer from '../TableFooterSection/TableFooterSection-Container';
import { makeStyles } from '@material-ui/core/styles';
import RequestTableContainer from '../../ViewRequests/RequestTable';
import RequestTableFooterContainer from '../../ViewRequests/RequestTableFooter';
import RemoveSelectedButton from '../RemoveSelectedButton/RemoveSelectedButton';
import RequestTableHeaderContainer from '../../ViewRequests/RequestTableHeader';
import RemoveSelectedButtonContainer from '../RemoveSelectedButton/RemoveSelectedButton-Container';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: theme.spacing(2)
  }
}));
const tableColumns = [
  { name: 'Name', property: 'databasename' }, // placeholder from name property
  { name: 'Domain', property: 'domain' },
  { name: 'Date Created', property: 'createddate' }
];

const TableSection = props => {
  const { selectedSearchResultCopy } = props;
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
      const newSelecteds = selectedSearchResultCopy.map(request => request.Id);
      setSelected(newSelecteds);
      return;
    } else {
      setSelected([]);
    }
  };
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
                numSelected={selected.length}
                rowCount={4}
                onSelectedAllClick={handleToggleAllCheckbox}
                onSort={handleSortClick}
              />
              <TableBodySectionContainer />
            </Table>
          </div>
          <RequestTableFooterContainer
            count={2}
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
