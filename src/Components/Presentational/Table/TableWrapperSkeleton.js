import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { TableRow, TableCell } from '@material-ui/core';

const TableWrapperSkeleton = props => {
  return (
    <TableRow>
      <TableCell colspan={props.colspan}>
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
  );
};

export default TableWrapperSkeleton;
