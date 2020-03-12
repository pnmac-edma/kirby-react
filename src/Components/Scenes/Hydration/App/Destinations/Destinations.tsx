import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, useFormikContext } from 'formik';
import NewDestinationForm from '../../NewDestination/NewDestination-Form';
import {
  Button,
  Checkbox,
  Dialog,
  IconButton,
  InputLabel,
  TextField,
  Typography,
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
  },
  selectFormControl: {
    display: 'inline-flex',
    marginTop: '0.5rem',
    width: '80%'
  },
  description: {
    fontSize: '14px',
    margin: '1rem 0',
    color: color.g500
  },
  plusButton: {
    marginTop: '0.5rem',

    '& .MuiSvgIcon-root': {
      height: 16,
      width: 16
    }
  },
  introPlus: {
    marginTop: '1.1rem',
    position: 'absolute',
    right: '0.8rem'
  },
  advancedFilters: {
    padding: '1rem'
  },
  modal: {
    '& .MuiDialog-paperWidthSm': {
      padding: '2rem'
    }
  }
}));

type DestinationsProps = {
  addNodeToDiagram: AddNodeToDiagram;
};

const Destinations = ({ addNodeToDiagram }: DestinationsProps) => {
  const classes = useStyles();
  const { values } = useFormikContext() as { values: InitialStateTypes };
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSensOpen, setIsSensOpen] = useState(true);
  const isDestinationModalOpen = useSelector(
    ({ hydration }: any) => hydration.isDestinationModalOpen
  );
  const dispatch = useDispatch();
  const sensitivity = values.destinationsFilterSens;

  return (
    <>
      <Dialog
        className={classes.modal}
        open={isDestinationModalOpen}
        aria-labelledby="form-destination"
      >
        <NewDestinationForm isAppForm={true} />
      </Dialog>
      <div className={`Toolbar__filters ${classes.sensitivityFilter}`}>
        <FormControl
          className={`Input__select Input__select--sensitivity ${classes.selectFormControl}`}
        >
          <InputLabel id="destination-type">Sensitivity Level</InputLabel>
          <Field
            id="destination-type"
            name="destinationsFilterSens"
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
        <IconButton
          className={`${classes.plusButton} ${classes.introPlus}`}
          onClick={() => setIsSensOpen(!isSensOpen)}
        >
          {isSensOpen ? <Remove /> : <Add />}
        </IconButton>
        {isSensOpen && sensitivity && (
          <Typography variant="body1" className={classes.description}>
            {(mockSensitivity as any)[sensitivity]}
          </Typography>
        )}
        {isSensOpen && !sensitivity && (
          <Typography variant="body1" className={classes.description}>
            Select a sensitivity level in order to view Destinations
          </Typography>
        )}
      </div>
      {sensitivity && (
        <>
          <div className="Toolbar__filters">
            <SearchIcon className="Icon__search" />
            <Field
              name="destinationsFilter"
              className={`Input__filter Input__filter--destination`}
              label="Filter"
              as={TextField}
              variant="filled"
            />
            <IconButton
              className={classes.plusButton}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {isFilterOpen ? <Remove /> : <Add />}
            </IconButton>
            {isFilterOpen && (
              <div className={classes.advancedFilters}>
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
                <Button color="primary">Add</Button>
              </div>
            )}
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
        className="Toolbar__btm-btn"
      >
        <AddCircleOutline />
        New Destination
      </Button>
    </>
  );
};

export default Destinations;
