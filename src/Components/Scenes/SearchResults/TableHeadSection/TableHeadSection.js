import React from 'react';
import {
  TableCell,
  TableRow,
  TableHead,
  Checkbox,
  TableSortLabel
} from '@material-ui/core';

const ResultTableHead = props => {
  const {
    selectedAll,
    sortBy,
    searchResultSortRequest,
    handleCheckBoxSelect,
    isFilterQueriesEmpty
  } = props;

  return (
    <React.Fragment>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox" onClick={e => handleCheckBoxSelect(e)}>
            <Checkbox
              id="all"
              checked={selectedAll}
              disabled={isFilterQueriesEmpty}
            />
          </TableCell>
          <TableCell align="left">
            <TableSortLabel
              direction={sortBy.name}
              onClick={() => searchResultSortRequest('name')}
            >
              Name{' '}
            </TableSortLabel>
          </TableCell>
          <TableCell align="left">
            <TableSortLabel
              direction={sortBy.domain}
              onClick={() => searchResultSortRequest('domain')}
            >
              Domain
            </TableSortLabel>
          </TableCell>
          <TableCell align="left">
            <TableSortLabel
              direction={sortBy.owner}
              onClick={() => searchResultSortRequest('owner')}
            >
              Owner
            </TableSortLabel>
          </TableCell>
          <TableCell align="left">
            <TableSortLabel
              direction={sortBy.createddate}
              onClick={() => searchResultSortRequest('createddate')}
            >
              Date Created
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
    </React.Fragment>
  );
};

export default ResultTableHead;
