import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    background: '#e6e6e6'
  }
}));

const Justification = props => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        className={classes.textField}
        placeholder="Request Justification"
        multiline={true}
        fullWidth
        rows={6}
        rowsMax={6}
        variant="filled"
      />
    </div>
  );
};

export default Justification;
