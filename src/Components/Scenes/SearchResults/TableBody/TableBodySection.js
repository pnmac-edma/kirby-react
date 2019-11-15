import React from 'react';
import {
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
  Typography
} from '@material-ui/core';
import color from '@edma/design-tokens/js/color';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  hasAccess: {
    color: theme.palette.type === 'light' ? color.b300 : color.b400
  },
  redColor: { color: color.r400 }
}));

const TableBodySection = props => {
  let { handleCheckBoxSelect, searchResultCopy } = props;
  const selected = [];
  const classes = useStyles();

  searchResultCopy.forEach((result, index) => {
    selected.push(
      <TableRow key={result.Id} hover>
        <TableCell padding="checkbox">
          <Checkbox
            id={`${result.Id}`}
            checked={result.checked}
            onChange={e => handleCheckBoxSelect(e)}
          />
        </TableCell>
        <TableCell align="left">
          {result.has_access === false ? (
            <span className={classes.hasAccess}>
              {result.name.toUpperCase()}
            </span>
          ) : (
            <span className={classes.hasAccess}>
              {result.name.toUpperCase()}
              {'  '}
              <span className={classes.redColor}>
                (You have access to this)
              </span>
            </span>
          )}
          <Typography>{result.description}</Typography>
        </TableCell>
        <TableCell align="left">{result.domain}</TableCell>
        <TableCell align="left">{result.owner}</TableCell>
        <TableCell align="left">{result.createddate}</TableCell>
      </TableRow>
    );
  });

  return (
    <React.Fragment>
      <TableBody>{selected}</TableBody>
    </React.Fragment>
  );
};

export default TableBodySection;
