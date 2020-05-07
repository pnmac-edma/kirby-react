import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import { justificationHandleInput } from '../../../../State/RequestAsset/actions';

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1.5),
    color: color.g200,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    width: 'auto',

    '& .MuiFilledInput-multiline': {
      maxWidth: '100%'
    }
  }
}));

const Justification = () => {
  const classes = useStyles();

  const { justification } = useSelector(
    ({ requestAssets }: any) => requestAssets
  );
  const dispatch = useDispatch();

  return (
    <TextField
      className={classes.textField}
      placeholder="Request Justification"
      value={justification}
      multiline={true}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(justificationHandleInput(e))
      }
      fullWidth
      rows={6}
      rowsMax={6}
      variant="filled"
    />
  );
};

export default Justification;
