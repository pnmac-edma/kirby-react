import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field } from 'formik';
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
import { setIsDestinationModalOpen } from '../../../../State/Hydration/actions';
import mockSensitivity from '../../../../State/__mockData__/mockSensitivity.json';
import mockDomains from '../../../../State/__mockData__/mockDomains.json';

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

interface NewDestinationFormProps {
  isAppForm: boolean;
}

const NewDestinationForm = (props: NewDestinationFormProps) => {
  const { isAppForm } = props;
  const classes = styles();
  const isDestinationModalOpen = useSelector(
    ({ hydration }: any) => hydration.isDestinationModalOpen
  );
  const dispatch = useDispatch();
  const prefixForApp = isAppForm ? 'destinationsCreate.' : '';

  return (
    <>
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
            label="Destination Name"
            variant="outlined"
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
              type="select"
              as={Select}
            >
              {mockDomains.map((domain, i) => (
                <MenuItem key={`${i}-${domain}`} value={domain}>
                  {domain}
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
        {!isDestinationModalOpen && (
          <Grid item>
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </Grid>
        )}
        <Grid item>
          <Button variant="contained" color="primary">
            Add Destination
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default NewDestinationForm;
