import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1.5),
    color: color.g200
  }
}));

const Justification = props => {
  const classes = useStyles();
  const { justification, justificationHandleInput } = props;
  return (
    <TextField
      className={classes.textField}
      placeholder="Request Justification"
      value={justification}
      multiline={true}
      onChange={e => justificationHandleInput(e)}
      fullWidth
      rows={6}
      rowsMax={6}
      variant="filled"
    />
  );
};

export default Justification;
