import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { TableRow, TableBody, TableCell } from '@material-ui/core';

const TableWrapperSkeleton = () => {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={10}>
          <Skeleton
            variant="rect"
            width={600}
            height={10}
            style={{ margin: '1.5rem 1rem', borderRadius: 50 }}
          />
          <Skeleton
            variant="rect"
            width={600}
            height={10}
            style={{ margin: '2.5rem 1rem', borderRadius: 50 }}
          />
          <Skeleton
            variant="rect"
            width={600}
            height={10}
            style={{ margin: '2.5rem 1rem', borderRadius: 50 }}
          />
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default TableWrapperSkeleton;
