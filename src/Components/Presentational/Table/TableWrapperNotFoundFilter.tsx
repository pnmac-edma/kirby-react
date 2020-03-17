import React from 'react';
import { TableCell, TableRow, TableBody } from '@material-ui/core';

interface TableWrapperNotFoundFilterProps {
  searchInput: string;
  filterTerm: string;
}

const TableWrapperNotFoundFilter = ({
  searchInput,
  filterTerm
}: TableWrapperNotFoundFilterProps) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={5}>
          We couldn't find anything matching search Term{' '}
          <strong>{searchInput}</strong> filter <strong>{filterTerm}</strong> in
          the lake
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default TableWrapperNotFoundFilter;
