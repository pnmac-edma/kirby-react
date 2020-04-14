import React from 'react';
import { Formik } from 'formik';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NewDestinationForm from './NewDestination-Form';
import NewDestinationValidationSchema from '../../../../Validators/newDestinationSchema';
import { destinationInitialState } from '../../../../State/Hydration/forms';

const styles = makeStyles(theme => ({
  container: {
    position: 'relative',
    margin: '0 auto',
    padding: '2rem',
    maxWidth: 1200,
    width: '100%'
  }
}));

const NewDestination = () => {
  const classes = styles();

  return (
    <Formik
      initialValues={destinationInitialState}
      validationSchema={NewDestinationValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Paper className={classes.container}>
            <NewDestinationForm isAppForm={false} />
          </Paper>
        </form>
      )}
    </Formik>
  );
};

export default NewDestination;
