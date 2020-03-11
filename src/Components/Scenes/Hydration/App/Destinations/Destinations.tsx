import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, useFormikContext } from 'formik';
import NewDestinationForm from '../../NewDestination/NewDestination-Form';
import {
  Button,
  Checkbox,
  Dialog,
  Grid,
  IconButton,
  TextField,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { AddCircleOutline, Add, Remove } from '@material-ui/icons';
import color from '@edma/design-tokens/js/color';
import ToolbarItemWidget from '../Toolbar/ToolbarItemWidget';
import {
  AddNodeToDiagram,
  InitialStateTypes
} from '../../../../../State/Hydration/types';
import { setIsDestinationModalOpen } from '../../../../../State/Hydration/actions';
import mockDestinationsData from '../../../../../State/__mockData__/mockDestinationsData.json';
import mockSensitivity from '../../../../../State/__mockData__/mockSensitivity.json';

const useStyles = makeStyles(theme => ({
  sensitivityFilter: {
    textAlign: 'left',
    padding: '8px 16px 16px'
  },
  searchFilter: {
    width: '50%'
  }
}));

type DestinationsProps = {
  addNodeToDiagram: AddNodeToDiagram;
};

const Destinations = ({ addNodeToDiagram }: DestinationsProps) => {
  const classes = useStyles();
  const { values } = useFormikContext() as { values: InitialStateTypes };
  const [isSensOpen, setIsSensOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isDestinationModalOpen = useSelector(
    ({ hydration }: any) => hydration.isDestinationModalOpen
  );
  const dispatch = useDispatch();
  const sensitivity = values.destinationsFilterSens;

  return (
    <>
      <Dialog open={isDestinationModalOpen} aria-labelledby="form-destination">
        <NewDestinationForm isAppForm={true} />
      </Dialog>
      <div className={`Toolbar__filters ${classes.sensitivityFilter}`}>
        <Grid justify="space-between" container>
          <Grid>
            <FormControl className={`Input__select`}>
              <Field
                displayEmpty
                id="type"
                name="destinationsFilterSens"
                label="Sensitivity"
                type="select"
                as={Select}
              >
                <MenuItem key={`select-sensitivity`} value="" disabled>
                  <em>Select Sensitivity</em>
                </MenuItem>
                {Object.keys(mockSensitivity).map((sens, i) => (
                  <MenuItem key={`${i}-${sens}`} value={sens}>
                    {sens}
                  </MenuItem>
                ))}
              </Field>
            </FormControl>
          </Grid>
          <Grid>
            <IconButton onClick={() => setIsSensOpen(!isSensOpen)}>
              {isSensOpen ? <Remove /> : <Add />}
            </IconButton>
          </Grid>
          {isSensOpen && sensitivity && (
            <div>{(mockSensitivity as any)[sensitivity]}</div>
          )}
          {!sensitivity && (
            <p>Select a sensitivity level in order to view Destinations</p>
          )}
        </Grid>
      </div>
      {sensitivity && (
        <>
          <div className={`Toolbar__filters`}>
            <SearchIcon className="Icon__search" />
            <Field
              name="destinationsFilter"
              className={`Input__filter`}
              label="Filter"
              as={TextField}
              variant="filled"
            />
          </div>
          <IconButton onClick={() => setIsFilterOpen(!isFilterOpen)}>
            {isFilterOpen ? <Remove /> : <Add />}
          </IconButton>
          {isFilterOpen && (
            <div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => console.log('hey')}
                      value="Retail"
                    />
                  }
                  label="Retail"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => console.log('hey')}
                      value="Servicing"
                    />
                  }
                  label="Servicing"
                />
              </FormGroup>
              <p>Add</p>
            </div>
          )}
          <div className="Toolbar__list">
            {Object.values(mockDestinationsData).map(
              ({ name, email, description, schedule }, i) => (
                <ToolbarItemWidget
                  key={`${name}-${i}`}
                  model={{
                    type: 'destination',
                    name,
                    email,
                    description,
                    schedule
                  }}
                  name={name}
                  color={color['c400']}
                  onClick={() =>
                    addNodeToDiagram(name, { x: 400, y: 400 }, 'destination', {
                      email,
                      description,
                      schedule
                    })
                  }
                />
              )
            )}
          </div>
        </>
      )}
      <Button
        onClick={() => dispatch(setIsDestinationModalOpen(true))}
        variant="contained"
        color="primary"
      >
        <AddCircleOutline />
        New Destination
      </Button>
    </>
  );
};

export default Destinations;
