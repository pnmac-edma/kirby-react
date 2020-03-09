import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormikContext } from 'formik';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { setIsEditorOpen } from '../../../../../State/Hydration/actions';
import { InitialStateTypes } from '../../../../../State/Hydration/types';

const useStyles = makeStyles(theme => ({
  typography: {
    textAlign: 'left',
    padding: '8px 16px 16px'
  }
}));

interface TransformProps {
  id: string;
}

const Transform = (props: TransformProps) => {
  const { id } = props;
  const { values } = useFormikContext() as { values: InitialStateTypes };
  const { transforms } = values;
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.typography} variant="h4">
        {transforms[id].name}
      </Typography>
      <button type="button" onClick={() => dispatch(setIsEditorOpen(true))}>
        Edit Script
      </button>
      <p>This is a description tag informational dump here</p>
    </div>
  );
};

export default Transform;
