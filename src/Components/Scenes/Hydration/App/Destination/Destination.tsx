import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { InitialStateTypes } from '../../../../../State/Hydration/types';

const useStyles = makeStyles(theme => ({
  typography: {
    textAlign: 'left',
    padding: '8px 16px 16px'
  }
}));

interface DestinationProps {
  id: string;
}

const Destination = (props: DestinationProps) => {
  const { id } = props;
  const { values } = useFormikContext() as { values: InitialStateTypes };
  const { destinations } = values;
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.typography} variant="h4">
        {destinations[id].name}
      </Typography>
      <p>{destinations[id].email}</p>
      <p>{destinations[id].description}</p>
    </div>
  );
};

export default Destination;
