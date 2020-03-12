import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { color } from '@edma/design-tokens';
import { InitialStateTypes } from '../../../../../State/Hydration/types';

const useStyles = makeStyles(theme => ({
  tileTitle: {
    textDecoration: 'bold',
    marginBottom: '1rem'
  },
  tileSection: {
    position: 'relative',
    textAlign: 'left',
    padding: '8px 16px 16px',
    borderBottom: `1px solid ${
      theme.palette.type === 'light' ? color.g100 : color.g700
    }`
  },
  tileDescription: {
    color: theme.palette.type === 'light' ? color.g600 : color.g400
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
    <div className={classes.tileSection}>
      <h4 className={classes.tileTitle}>{destinations[id].name}</h4>
      <p className={classes.tileDescription}>{destinations[id].email}</p>
      <p className={classes.tileDescription}>{destinations[id].description}</p>
    </div>
  );
};

export default Destination;
