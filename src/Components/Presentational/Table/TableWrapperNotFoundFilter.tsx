import React from 'react';
import { TableCell, TableRow, TableBody } from '@material-ui/core';

interface TableWrapperNotFoundFilterProps {
  searchedInput: string;
  filterTerm: string;
}

const TableWrapperNotFoundFilter = ({
  searchedInput,
  filterTerm
}: TableWrapperNotFoundFilterProps) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={5}>
          We couldn't find anything matching search Term{' '}
          <strong>{searchedInput}</strong> filter <strong>{filterTerm}</strong>{' '}
          in the lake
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default TableWrapperNotFoundFilter;
