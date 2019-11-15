import React from 'react';
import { TableRow, TableCell, Checkbox, TableBody } from '@material-ui/core';

const TableBodySection = props => {
  const { selectedSearchResultCopy, requestCheckBoxSelect } = props;
  const tableBody = selectedSearchResultCopy.reduce((acc, next) => {
    acc.push(
      <TableRow key={next.Id} hover>
        <TableCell padding="checkbox">
          <Checkbox
            id={`${next.Id}`}
            checked={next.chec}
            onChange={e => requestCheckBoxSelect(e)}
          />
        </TableCell>
        <TableCell align="left">
          <span>{next.name.toUpperCase()}</span>
        </TableCell>
        <TableCell align="left">{next.domain}</TableCell>
      </TableRow>
    );
    return acc;
  }, []);

  return (
    <React.Fragment>
      <TableBody>{tableBody}</TableBody>
    </React.Fragment>
  );
};

export default TableBodySection;
