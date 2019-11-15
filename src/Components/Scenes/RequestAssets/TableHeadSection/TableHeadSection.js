import React from 'react';
import { TableCell, TableRow, TableHead, Checkbox } from '@material-ui/core';

const TableHeadSection = props => {
  const { selectedAll, requestCheckBoxSelect } = props;
  return (
    <React.Fragment>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox" onClick={e => requestCheckBoxSelect(e)}>
            <Checkbox id="all" checked={selectedAll} />
          </TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Domain</TableCell>
        </TableRow>
      </TableHead>
    </React.Fragment>
  );
};

export default TableHeadSection;
