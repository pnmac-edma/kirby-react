import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { color } from '@edma/design-tokens';
import TableWrapperHeader from './TableWrapperHeader';
import TableWrapperColumnHeaders from './TableWrapperColumnHeaders';
import TableWrapperFooter from './TableWrapperFooter';
import TableWrapperBody from './TableWrapperBody';
import TableWrapperNotFound from './TableWrapperNotFound';
import TableWrapperNotFoundFilter from './TableWrapperNotFoundFilter';
import TableWrapperSkeleton from './TableWrapperSkeleton';
import { useForm, useSelectedFilters } from './hooks';
import { Column, Datum } from './types';

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
    whiteSpace: 'nowrap',
    color: theme.palette.type === 'light' ? color.b600 : color.b200,
    background: theme.palette.type === 'light' ? color.white : color.g900,

    '&:hover': {
      color: theme.palette.type === 'light' ? color.b600 : color.b200,
      background: theme.palette.type === 'light' ? color.b50 : color.g800
    }
  },
  link: {
    textDecoration: 'none'
  }
}));

const TableWrapper = ({
  columns = [],
  data = [],
  isLoading = false,
  filter = null,
  searchedInput = '',
  setTitleText = null,
  setFirstColLink = null,
  footerButtonLink = '',
  footerButtonText = '',
  setFooterButtonClick = () => {},
  selected = [],
  setToggleAllCheckbox = null,
  setToggleCheckbox = null,
  remove = false,
  setIsModalOpen = () => {}
}: TableWrapperProps) => {
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
  const [rowsPerPage, setRowsPerPage] = useState(25);
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
        selectedFilters.every(({ filterBy, filterType, filterTerm }: any) => {
          const selectedCol = columns.find(column => column.name === filterBy);
          const property = selectedCol ? selectedCol.property : '';
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
    : [];

  const setSelected = (id: string) => selected.indexOf(id) !== -1;

  const handleSortClick = (_: any, property: string) => {
    if (orderBy === property) {
      setOrder({
        ...order,
        [property]: (order as any)[property] === 'asc' ? 'desc' : 'asc'
      });
      return;
    }
    setOrderBy(property);
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  if (!data) {
    return <TableWrapperNotFound searchedInput={searchedInput} />;
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
            data={filteredData}
            numSelected={selected.length}
            setToggleAllCheckbox={setToggleAllCheckbox}
            onSort={handleSortClick}
            order={order}
            orderBy={orderBy}
            rowCount={filteredData.length}
            selected={selected}
            remove={remove}
          />
          {isLoading ? (
            <TableWrapperSkeleton />
          ) : filteredData.length ? (
            <TableWrapperBody
              columns={columns}
              data={filteredData}
              setToggleCheckbox={setToggleCheckbox}
              setFirstColLink={setFirstColLink}
              setSelected={setSelected}
              selected={selected}
              order={order}
              orderBy={orderBy}
              page={page}
              rowsPerPage={rowsPerPage}
              remove={remove}
              setIsModalOpen={setIsModalOpen}
            />
          ) : (
            <TableWrapperNotFoundFilter
              searchedInput={searchedInput}
              filterTerm={filterForm.filterTerm}
            />
          )}
        </Table>
      </div>
      <TableWrapperFooter
        count={filteredData.length}
        onChangePage={(_: any, newPage: any) => setPage(newPage)}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
      >
        {footerButtonText && (
          <Link
            className={classes.link}
            to={footerButtonLink || window.location.pathname}
          >
            <Button
              className={classes.button}
              color="secondary"
              disabled={selected.length === 0}
              onClick={() => setFooterButtonClick()}
              variant="contained"
            >
              {footerButtonText}
            </Button>
          </Link>
        )}
      </TableWrapperFooter>
    </Paper>
  );
};

export default TableWrapper;

interface TableWrapperProps {
  columns: Array<Column>;
  data: Array<Datum>;
  isLoading?: boolean;
  searchedInput?: string;
  setFirstColLink?: Function | null;
  /**
   * Filter requires setTitleText to work
   */
  setTitleText?: Function | null;
  filter?: Array<string> | null;
  /**
   * FooterButtonLink and setFooterButtonClick requires footerButtonText to work
   */
  footerButtonText?: string;
  footerButtonLink?: string;
  setFooterButtonClick?: Function;
  /**
   * These 3 props need to all be there for checkboxes to work;
   * omitting all of them will remove all checkboxes
   */
  selected?: Array<any>;
  setToggleAllCheckbox?: Function | null;
  setToggleCheckbox?: Function | null;
  /**
   * These 2 props need to all be there for Remove to work;
   */
  remove?: boolean;
  setIsModalOpen?: Function;
}
