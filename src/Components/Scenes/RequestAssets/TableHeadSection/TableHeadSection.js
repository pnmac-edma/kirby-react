import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableCell,
  TableRow,
  TableHead,
  Checkbox,
  Typography,
  Toolbar
} from '@material-ui/core';

const useToolbarStyles = makeStyles(theme => ({
  title: {
    flex: '0 0 auto'
  }
}));

const TableHeadSection = props => {
  const { selectedAll, requestCheckBoxSelect } = props;
  const classes = useToolbarStyles();
  return (
    <React.Fragment>
      <TableHead>
        <Toolbar>
          <div className={classes.title}>
            <Typography variant="h6" id="tableTitle">
              Assets in this request
            </Typography>
          </div>
        </Toolbar>
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
