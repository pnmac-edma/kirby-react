import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TableWrapperHeader from './TableWrapperHeader';
import TableWrapperColumnHeaders from './TableWrapperColumnHeaders';
import TableWrapperFooter from './TableWrapperFooter';
import TableWrapperBody from './TableWrapperBody';
import TableWrapperNotFound from './TableWrapperNotFound';
import TableWrapperNotFoundFilter from './TableWrapperNotFoundFilter';
import TableWrapperSkeleton from './TableWrapperSkeleton';
import { useForm, useSelectedFilters } from './hooks';

const useStyles = makeStyles(theme => ({
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
    height: '50vh',
    overflowX: 'auto',
    borderRadius: 'inherit'
  },
  button: {
    textTransform: 'none',
    fontWeight: 'bold',
    color: theme.palette.common.white,
    whiteSpace: 'nowrap'
  },
  link: {
    textDecoration: 'none'
  }
}));

/**
 * redux state: {
 *  data: [],
 *  selectedData: [],
 *  searchInput: '',
 * }
 *
 * 2 actions must be provided
 * - setToggleCheckbox (this changes selectedData)
 * - setToggleAllCheckbox (this also changes selectedData)
 *
 * main dynamic choice options
 * - title
 * - filter
 * - footer
 *
 * // if you want filtering, you must provide the following
 * filter: []
 *
 * TODO:
 * - implement table for the last table
 * - fix the request assets
 * - fix the styling of table on /search/access page
 * - create table documentation and usage examples
 * - fix select all checkbox button when you have a filter going
 * - fix the PropTypes
 */
const TableWrapper = props => {
  const {
    columns,
    data,
    filter,
    handleFooterButtonClick,
    footerButtonLink,
    handleRequestClick,
    isLoading,
    selected,
    footerButtonText,
    setTitleText,
    setToggleAllCheckbox,
    setToggleCheckbox
  } = props;
  const classes = useStyles();

  const filterInitialValues = !filter || {
    filterBy: '',
    filterType: '',
    filterTerm: ''
  };
  const orderInitialValues = columns.reduce((acc, column) => {
    return { ...acc, [column.property]: 'desc' };
  }, {});

  const [order, setOrder] = useState(orderInitialValues);
  const [orderBy, setOrderBy] = useState(columns[0].property);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isFilterClick, setIsFilterClick] = useState(false);
  const [filterForm, setFilterForm, resetForm] = useForm(filterInitialValues);
  const [
    selectedFilters,
    setSelectedFilters,
    removeFilter
  ] = useSelectedFilters([], filterForm, resetForm);

  // filters data based on all the active filter chips
  const filteredData = data
    ? data.filter(datum =>
        selectedFilters.every(({ filterBy, filterType, filterTerm }) => {
          const property = columns.find(column => column.name === filterBy)
            .property;
          if (filterType === 'Contains') {
            return datum[property].includes(filterTerm);
          }
          if (filterType === "Doesn't Contain") {
            return !datum[property].includes(filterTerm);
          }
          if (filterType === 'Equals') {
            return datum[property] === filterTerm;
          }
          return true;
        })
      )
    : null;

  const isSelected = id => selected.indexOf(id) !== -1;

  const handleSortClick = (e, property) => {
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

  if (isLoading) {
    return <TableWrapperSkeleton />;
  }

  if (!data) {
    return <TableWrapperNotFound />;
  }

  return (
    <Paper className={classes.paper}>
      <div className={classes.tableWrapper}>
        <TableWrapperHeader
          filter={filter}
          filterForm={filterForm}
          isFilterClick={isFilterClick}
          removeFilter={removeFilter}
          selectedFilters={selectedFilters}
          setFilterForm={setFilterForm}
          setIsFilterClick={setIsFilterClick}
          setSelectedFilters={setSelectedFilters}
          setTitleText={setTitleText}
        />
        <Table className={classes.table} size="medium" stickyHeader>
          <TableWrapperColumnHeaders
            columns={columns}
            data={data}
            numSelected={selected.length}
            onSelectAllClick={setToggleAllCheckbox}
            onSort={handleSortClick}
            order={order}
            orderBy={orderBy}
            rowCount={filteredData.length}
            selected={selected}
          />
          {filteredData.length ? (
            <TableWrapperBody
              columns={columns}
              data={filteredData}
              handleCheckboxClick={setToggleCheckbox}
              handleRequestClick={handleRequestClick}
              isSelected={isSelected}
              selected={selected}
              order={order}
              orderBy={orderBy}
              page={page}
              rowsPerPage={rowsPerPage}
            />
          ) : (
            <TableWrapperNotFoundFilter />
          )}
        </Table>
      </div>
      <TableWrapperFooter
        count={filteredData.length}
        onChangePage={(e, newPage) => setPage(newPage)}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
      >
        <Link
          className={classes.link}
          to={footerButtonLink || window.location.pathname}
        >
          <Button
            className={classes.button}
            color="primary"
            disabled={selected.length === 0}
            onClick={handleFooterButtonClick}
            variant="contained"
          >
            {footerButtonText}
          </Button>
        </Link>
      </TableWrapperFooter>
    </Paper>
  );
};

TableWrapper.propTypes = {
  tableColumns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      property: PropTypes.string
    })
  ),
  data: PropTypes.any,
  footerButtonText: PropTypes.string,
  handleFooterButtonClick: PropTypes.func,
  handleRequestClick: PropTypes.func
};

export default TableWrapper;
