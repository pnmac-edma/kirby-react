import React, { useState } from 'react';
import { Button, Table, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import RequestTableHeader from './RequestTableHeader';
import RequestTableFooter from './RequestTableFooter';
import RequestTableBody from './RequestTableBody';

const tableStyles = makeStyles(theme => ({
  paper: {
    margin: 12,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  table: {
    minWidth: 6
  },
  tableWrapper: {
    flexGrow: 1,
    height: '1px',
    overflowX: 'auto',
    borderRadius: 'inherit'
  },
  button: {
    textTransform: 'none',
    fontWeight: 'bold',
    whiteSpace: 'nowrap'
  }
}));

const RequestTable = props => {
  const {
    tableColumns,
    requests,
    setFooterButtonText,
    handleFooterButtonClick,
    handleRequestClick,
    linkTo,
    title
  } = props;

  const classes = tableStyles();

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
      const newSelecteds = requests.map(request => request.Id);
      setSelected(newSelecteds);
      return;
    } else {
      setSelected([]);
    }
  };
  return (
    <Paper className={classes.paper}>
      {title}
      <div className={classes.tableWrapper}>
        <Table className={classes.table} size="medium" stickyHeader>
          <RequestTableHeader
            columns={tableColumns}
            order={order}
            orderBy={orderBy}
            numSelected={selected.length}
            rowCount={requests.length}
            onSelectAllClick={handleToggleAllCheckbox}
            onSort={handleSortClick}
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
            handleRequestClick={handleRequestClick}
          />
        </Table>
      </div>
      <RequestTableFooter
        count={requests.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={(e, newPage) => setPage(newPage)}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        linkTo={linkTo}
      >
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          disabled={selected.length === 0}
          onClick={() =>
            handleFooterButtonClick({ requests: requests, selected: selected })
          }
        >
          {setFooterButtonText(selected)}
        </Button>
      </RequestTableFooter>
    </Paper>
  );
};

RequestTable.propTypes = {
  tableColumns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      property: PropTypes.string
    })
  ),
  requests: PropTypes.any,
  setFooterButtonText: PropTypes.func,
  handleFooterButtonClick: PropTypes.func,
  handleRequestClick: PropTypes.func
};

export default RequestTable;
