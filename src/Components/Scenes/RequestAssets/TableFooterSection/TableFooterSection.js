import React from 'react';
import { TableFooter, TableRow, TableCell } from '@material-ui/core';
import RemoveSelectedButtonContainer from '../RemoveSelectedButton/RemoveSelectedButton-Container';

const TableFooterSection = props => {
  return (
    <TableFooter>
      <TableRow>
        <TableCell>
          <RemoveSelectedButtonContainer />
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default TableFooterSection;
