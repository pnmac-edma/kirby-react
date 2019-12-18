import React from 'react';
import {
  Table,
  Paper,
  TableFooter,
  TableRow,
  TableCell,
  TablePagination,
  TableBody
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TableHeadTitle from '../TableHeadTitle/TableHeadTitle-Container';
import TableHeadSectionContainer from '../TableHeadSection/TableHeadSection-Container';
import TableBodySectionContainer from './../TableBody/TableBodySection-Container';
import NotFoundContainer from './../NotFound/NotFound-Container';
import CheckBoxButtonContainer from '../CheckBoxButton/CheckBoxButton-Container';
import NotFoundFilterContainer from '../NotFoundFilter/NotFoundFilter-Container';
import RequestTableContainer from '../../ViewRequests/RequestTable';
import { transformRequests } from '../../../../State/helpers';

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
  },
  footerTd: {
    textAlign: 'left'
  }
}));

const TableSection = props => {
  const {
    searchResult,
    isFilterQueriesEmpty,
    rowsPerPage,
    rowsPerPageOptions,
    requestAssetsClick,
    searchResultCopy
  } = props;
  const requestsInboxTableColumns = [
    { name: 'Name', property: 'name' },
    { name: 'Description', property: 'description' },
    { name: 'Domain', property: 'domain' },
    { name: 'owner', property: 'createdbyemail' },
    { name: 'Date Requested', property: 'createddate' }
  ];

  const classes = useStyles();
  const setFooterButtonText = searchResultCopy =>
    `${searchResultCopy.length} request${
      searchResultCopy.length !== 1 ? 's' : ''
    } selected`;
  return (
    <RequestTableContainer
      tableColumns={requestsInboxTableColumns}
      title={<TableHeadTitle />}
      linkTo={'/search/access'}
      requests={searchResultCopy}
      handleRequestClick={(e, id) => console.log(`request ${id} clicked`)}
      setFooterButtonText={setFooterButtonText}
      handleFooterButtonClick={requestAssetsClick}
    />
  );
};

export default TableSection;

// <Paper className={classes.root}>
// <div className={classes.tableWrapper}>
//   <TableHeadTitle />
//   <Table className={classes.table} size='small' stickyHeader>
//     <TableHeadSectionContainer />
//     {isFilterQueriesEmpty ? (
//       <NotFoundFilterContainer />
//     ) : (
//       <TableBodySectionContainer />
//     )}
//   </Table>
//   <Table className={classes.table} size='small'>
//     <TableBody>
//       <TableRow>
//         <td colSpan='2' className={classes.footerTd}>
//           <CheckBoxButtonContainer />
//         </td>
//         <TableCell></TableCell>
//       </TableRow>
//     </TableBody>
//   </Table>
// </div>
// </Paper>
