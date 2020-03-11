import React from 'react';
import { Skeleton } from '@material-ui/lab';

const TableWrapperSkeleton = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default TableWrapperSkeleton;
