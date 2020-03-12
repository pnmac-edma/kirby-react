import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useFormikContext } from 'formik';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';
import SelectField from '../../../../Presentational/Hydration/SelectField';
import mockCalendarTeams from '../../../../../State/__mockData__/mockCalendarTeamsData.json';
import { InitialStateTypes } from '../../../../../State/Hydration/types';

const useStyles = makeStyles(theme => ({
  container: {
    width: '1000px' // TODO: change this
  }
}));

interface ScheduleJobProps {
  setIsScheduleJobOpen: (value: boolean) => void;
}

const ScheduleJob = (props: ScheduleJobProps) => {
  const classes = useStyles();
  const { setIsScheduleJobOpen } = props;
  const { values, setFieldValue } = useFormikContext() as {
    values: InitialStateTypes;
    setFieldValue: (field: string, value: any) => void;
  };
  const { scheduleJob } = values;

  const setDateChange = (date: Date | null) => {
    const newScheduleJob = {
      ...scheduleJob,
      startsOn: date
    };
    setFieldValue('scheduleJob', newScheduleJob);
  };

  console.log(values);

  return (
    <div className={classes.container}>
      <div>Schedule Job</div>
      <SelectField
        className=""
        id="calendar-team"
        label="Calendar"
        name="scheduleJob.calendarTeam"
        options={mockCalendarTeams}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="starts-on-date"
          label="Starts on"
          value={scheduleJob.startsOn}
          onChange={setDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="starts-on-time"
          value={scheduleJob.startsOn}
          onChange={setDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time'
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default ScheduleJob;
