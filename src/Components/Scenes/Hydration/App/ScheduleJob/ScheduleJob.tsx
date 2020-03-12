import React from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Field, useFormikContext } from 'formik';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';
import SelectField from '../../../../Presentational/Hydration/SelectField';
import { InitialStateTypes } from '../../../../../State/Hydration/types';
import mockCalendarTeams from '../../../../../State/__mockData__/mockCalendarTeamsData.json';
import mockRepeatsData from '../../../../../State/__mockData__/mockRepeatsData.json';
import mockFailsData from '../../../../../State/__mockData__/mockFailsData.json';
import mockWeekOfMonth from '../../../../../State/__mockData__/mockWeekOfMonthData.json';

const useStyles = makeStyles(theme => ({
  container: {
    width: '500px' // TODO: change this
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

  const daysList = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];
  const setEnableJob = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newScheduleJob = {
      ...scheduleJob,
      enableJob: event.target.checked
    };
    setFieldValue('scheduleJob', newScheduleJob);
  };
  const setDateChange = (date: Date | null) => {
    const newScheduleJob = {
      ...scheduleJob,
      startsOn: date
    };
    setFieldValue('scheduleJob', newScheduleJob);
  };
  const setSelectedDays = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const newScheduleJob = {
      ...scheduleJob,
      repeats: {
        ...scheduleJob.repeats,
        selectedDays: {
          ...scheduleJob.repeats.selectedDays,
          [name]: event.target.checked
        }
      }
    };
    setFieldValue('scheduleJob', newScheduleJob);
  };
  const isRepeatWeeksOrMonths = scheduleJob.repeats.interval !== 'Days';
  const isRepeatWeeks = scheduleJob.repeats.interval === 'Weeks';

  const repeatWeekSelect = (
    <SelectField
      className=""
      id="repeats-weekofmonth"
      name="scheduleJob.repeats.weekOfMonth"
      options={mockWeekOfMonth}
    />
  );

  return (
    <div className={classes.container}>
      <div>Schedule Job</div>
      <SelectField
        fullWidth
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
      <div>
        <Field
          name="scheduleJob.repeats.num"
          className=""
          label="Repeat every"
          type="number"
          as={TextField}
        />
        <SelectField
          className=""
          id="repeats-interval"
          name="scheduleJob.repeats.interval"
          options={mockRepeatsData}
        />
        <Field
          className=""
          name="scheduleJob.fails.num"
          label="Fails after"
          type="number"
          as={TextField}
        />
        <SelectField
          className=""
          id="fails-interval"
          name="scheduleJob.fails.interval"
          options={mockFailsData}
        />
      </div>
      {isRepeatWeeksOrMonths && (
        <div>
          {isRepeatWeeks ? (
            <FormHelperText>Repeat on</FormHelperText>
          ) : (
            <>
              <FormHelperText>Repeat on the</FormHelperText>
              {repeatWeekSelect}
            </>
          )}
          <div>
            {daysList.map((day: string, i: number) => (
              <Checkbox
                key={`${day}-${i}`}
                checked={scheduleJob.repeats.selectedDays[day]}
                onChange={e => setSelectedDays(e, day)}
                value={day}
                inputProps={{ 'aria-label': `${day}-checkbox` }}
              />
            ))}
          </div>
        </div>
      )}
      <FormControlLabel
        control={
          <Checkbox
            checked={scheduleJob.enableJob}
            onChange={e => setEnableJob(e)}
            value="enableJob"
            color="primary"
          />
        }
        label="Enable this job"
      />
      <Grid container justify="flex-end" spacing={2}>
        <Grid item>
          <Button
            onClick={() => setIsScheduleJobOpen(false)}
            variant="contained"
            color="secondary"
          >
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Submit Job
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ScheduleJob;
