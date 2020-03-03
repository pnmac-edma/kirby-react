import React from 'react';
import { Button, Grid, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  gridContainer: {
    margin: '1rem 0'
  },
  textfield: {
    width: '100%'
  }
}));

const NewDestinationForm = props => {
  const classes = styles();

  return (
    <>
      <Typography variant="h2">New Destination</Typography>
      <Typography variant="body1">
        New destinations are made available within their respective domains, and
        can only contain data that matches the declared sensitivity level.
      </Typography>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs>
          <TextField
            id="name"
            label="Destination Name"
            variant="outlined"
            className={classes.textfield}
          />
        </Grid>
        <Grid item xs>
          <TextField
            select
            id="sensitivity"
            label="Sensitivity"
            variant="outlined"
            helperText="Please select a sensitivity level"
            className={classes.textfield}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs>
          <TextField
            select
            id="domain"
            label="Domain"
            variant="outlined"
            helperText="Please select a domain"
            className={classes.textfield}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs>
          <TextField
            multiline
            rows="3"
            id="description"
            label="Description"
            variant="outlined"
            className={classes.textfield}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs>
          <TextField
            multiline
            rows="3"
            id="justification"
            label="Justification"
            variant="outlined"
            className={classes.textfield}
          />
        </Grid>
      </Grid>
      <Grid container justify="flex-end" spacing={2}>
        <Grid item>
          <Button variant="contained" color="secondary">
            Cancel
          </Button>
        </Grid>
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
