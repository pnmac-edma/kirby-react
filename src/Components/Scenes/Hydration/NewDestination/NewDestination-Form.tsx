import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, useFormikContext } from 'formik';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  setIsDestinationModalOpen,
  newDestinationRequestFetch,
  databaseCheckRequestFetch
} from '../../../../State/Hydration/actions';
import mockSensitivity from '../../../../State/__mockData__/mockSensitivity.json';
import SnackBar from '../../../Presentational/Modal/SnackBar';

const styles = makeStyles(theme => ({
  gridContainer: {
    margin: '0.5rem 0',
    width: '100%'
  },
  textfield: {
    width: '100%',

    '& div': {
      maxWidth: '100%'
    }
  }
}));

const NewDestinationForm = (props: NewDestinationFormProps) => {
  const { isAppForm } = props;
  const classes = styles();
  const { isDestinationModalOpen, newDestinationMessage } = useSelector(
    ({ hydration }: any) => hydration
  );
  const { domains } = useSelector(({ shared }: any) => shared);
  const dispatch = useDispatch();
  const prefixForApp = isAppForm ? 'destinationsCreate.' : '';
  const {
    errors,
    touched,
    values,
    isValid
  } = (useFormikContext() as unknown) as {
    errors: InitialErrorTypes;
    touched: InitialTouchedTypes;
    values: InitialValuesTypes;
    isValid: any;
  };

  const [notification, setNotification] = useState(false);
  const handleOpenNotification = () => setNotification(true);
  const handleCloseNotification = () => setNotification(false);

  return (
    <>
      {newDestinationMessage.length > 0 && (
        <SnackBar
          message={newDestinationMessage}
          notification={notification}
          handleOpenNotification={handleOpenNotification}
          handleCloseNotification={handleCloseNotification}
        />
      )}
      <Typography variant="h2">New Destination</Typography>
      <Typography variant="body1">
        New destinations are made available within their respective domains, and
        can only contain data that matches the declared sensitivity level.
      </Typography>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs>
          <Field
            name={`${prefixForApp}name`}
            className={classes.textfield}
            error={errors.name ? touched.name : false}
            helperText={touched.name ? errors.name : null}
            label="Destination Name"
            variant="outlined"
            onBlur={(e: any) => {
              dispatch(databaseCheckRequestFetch(e.target.value));
            }}
            as={TextField}
          />
        </Grid>
        <Grid item xs>
          <FormControl className={classes.textfield} variant="outlined">
            <InputLabel id="sensitivity">Sensitivity</InputLabel>
            <Field
              id="sensitivity"
              name={`${prefixForApp}sensitivity`}
              label="Sensitivity"
              error={errors.sensitivity ? touched.sensitivity : false}
              helperText={touched.sensitivity ? errors.sensitivity : null}
              type="select"
              as={Select}
            >
              {Object.keys(mockSensitivity).map((sens, i) => (
                <MenuItem key={`${i}-${sens}`} value={sens}>
                  {sens}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs>
          <FormControl className={classes.textfield} variant="outlined">
            <InputLabel id="domain">Domain</InputLabel>
            <Field
              id="domain"
              name={`${prefixForApp}domain`}
              label="Domain"
              error={errors.domain ? touched.domain : false}
              helperText={touched.domain ? errors.domain : null}
              type="select"
              as={Select}
            >
              {domains.map((domain: any, i: any) => (
                <MenuItem key={domain.Id} value={domain.domain}>
                  {domain.domain}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs>
          <Field
            multiline
            name={`${prefixForApp}description`}
            className={classes.textfield}
            label="Description"
            error={errors.description ? touched.description : false}
            helperText={touched.description ? errors.description : null}
            variant="outlined"
            rows="3"
            as={TextField}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs>
          <Field
            multiline
            name={`${prefixForApp}justification`}
            className={classes.textfield}
            label="Justification"
            error={errors.justification ? touched.justification : false}
            helperText={touched.justification ? errors.justification : null}
            variant="outlined"
            rows="3"
            as={TextField}
          />
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.gridContainer}
        justify="flex-end"
        spacing={2}
      >
        {isAppForm && isDestinationModalOpen && (
          <Grid item>
            <Button
              onClick={() => dispatch(setIsDestinationModalOpen(false))}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </Grid>
        )}
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(newDestinationRequestFetch(values));
              handleOpenNotification();
            }}
            disabled={!isValid}
          >
            Add Destination
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default NewDestinationForm;

interface NewDestinationFormProps {
  isAppForm: boolean;
}

interface InitialErrorTypes {
  name: string;
  sensitivity: string;
  domain: string;
  description: string;
  justification: string;
}

interface InitialTouchedTypes {
  name: boolean;
  sensitivity: boolean;
  domain: boolean;
  description: boolean;
  justification: boolean;
}

interface InitialValuesTypes {
  name: string;
  sensitivity: string;
  domain: string;
  descrition: string;
  justification: string;
}
