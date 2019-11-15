import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

const Justification = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TextField
        className={classes.textField}
        placeholder="Request Justification"
        multiline={true}
        fullWidth
        rows={6}
        rowsMax={6}
        variant="filled"
      />
    </React.Fragment>
  );
};

export default Justification;
