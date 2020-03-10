import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, useFormikContext } from 'formik';
import NewDestinationForm from '../../NewDestination/NewDestination-Form';
import {
  Button,
  Dialog,
  TextField,
  FormControl,
  MenuItem,
  Select
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { AddCircleOutline } from '@material-ui/icons';
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
  }
}));

type DestinationsProps = {
  addNodeToDiagram: AddNodeToDiagram;
};

const Destinations = ({ addNodeToDiagram }: DestinationsProps) => {
  const classes = useStyles();
  const { values } = useFormikContext() as { values: InitialStateTypes };
  const isDestinationModalOpen = useSelector(
    ({ hydration }: any) => hydration.isDestinationModalOpen
  );
  const dispatch = useDispatch();
  const isSensSelected = values.destinationsFilterSens;

  return (
    <>
      <Dialog open={isDestinationModalOpen} aria-labelledby="form-destination">
        <NewDestinationForm isAppForm={true} />
      </Dialog>
      <div className={`Toolbar__filters ${classes.sensitivityFilter}`}>
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
            {mockSensitivity.map((sens, i) => (
              <MenuItem key={`${i}-${sens}`} value={sens}>
                {sens}
              </MenuItem>
            ))}
          </Field>
        </FormControl>
        {!isSensSelected && (
          <p>Select a sensitivity level in order to view Destinations</p>
        )}
      </div>
      {isSensSelected && (
        <>
          <div className="Toolbar__filters">
            <SearchIcon className="Icon__search" />
            <Field
              name="destinationsFilter"
              className="Input__filter"
              label="Filter"
              as={TextField}
              variant="filled"
            />
          </div>
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
                    addNodeToDiagram(name, { x: 400, y: 400 }, 'destination')
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
