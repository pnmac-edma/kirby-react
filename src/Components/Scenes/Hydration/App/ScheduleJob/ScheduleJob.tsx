import React from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  TextField
} from '@material-ui/core';
import { color, spacing } from '@edma/design-tokens';
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
    padding: spacing['3'],
    background: color.g50
  },
  header: {
    borderBottom: `1px solid ${
      theme.palette.type === 'light' ? color.g100 : color.g700
    }`
  },
  label: {
    color: color.g600
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
      className="Scheduler__input"
      id="repeats-weekofmonth"
      name="scheduleJob.repeats.weekOfMonth"
      options={mockWeekOfMonth}
    />
  );

  return (
    <>
      <div className={`Scheduler ${classes.container} ${classes.header}`}>
        <h2>Schedule Job</h2>
      </div>
      <div className={classes.container}>
        <InputLabel
          htmlFor="calendar-team"
          shrink={false}
          className={classes.label}
        >
          Calendar
        </InputLabel>
        <SelectField
          fullWidth
          className="Scheduler__input Scheduler__team-input"
          id="calendar-team"
          placeholder="Select a team"
          name="scheduleJob.calendarTeam"
          options={mockCalendarTeams}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container spacing={2}>
            <Grid item xs>
              <InputLabel
                htmlFor="starts-on-date"
                shrink={false}
                className={classes.label}
              >
                Starts on
              </InputLabel>
              <KeyboardDatePicker
                disableToolbar
                className="Scheduler__input Scheduler__date-input"
                format="MM/dd/yyyy"
                id="starts-on-date"
                value={scheduleJob.startsOn}
                onChange={setDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </Grid>
            <Grid item xs>
              <KeyboardTimePicker
                className="Scheduler__input Scheduler__time-input"
                id="starts-on-time"
                value={scheduleJob.startsOn}
                onChange={setDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time'
                }}
              />
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid container spacing={2}>
          <Grid item xs>
            <InputLabel
              htmlFor="repeats-num"
              shrink={false}
              className={classes.label}
            >
              Repeats every
            </InputLabel>
            <Grid container spacing={1}>
              <Grid item xs>
                <Field
                  name="scheduleJob.repeats.num"
                  className="Scheduler__input Scheduler__num-input"
                  type="number"
                  id="repeats-num"
                  as={TextField}
                />
              </Grid>
              <Grid item xs>
                <SelectField
                  className="Scheduler__input Scheduler__num-select"
                  id="repeats-interval"
                  name="scheduleJob.repeats.interval"
                  options={mockRepeatsData}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <InputLabel
              htmlFor="fails-num"
              shrink={false}
              className={classes.label}
            >
              Fails after
            </InputLabel>
            <Grid container spacing={1}>
              <Grid item xs>
                <Field
                  className="Scheduler__input Scheduler__num-input"
                  name="scheduleJob.fails.num"
                  type="number"
                  id="fails-num"
                  as={TextField}
                />
              </Grid>
              <Grid item xs>
                <SelectField
                  className="Scheduler__input Scheduler__num-select"
                  id="fails-interval"
                  name="scheduleJob.fails.interval"
                  options={mockFailsData}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
                <FormControlLabel
                  control={
                    <Checkbox
                      key={`${day}-${i}`}
                      checked={scheduleJob.repeats.selectedDays[day]}
                      onChange={e => setSelectedDays(e, day)}
                      value={day}
                      inputProps={{ 'aria-label': `${day}-checkbox` }}
                    />
                  }
                  label={day}
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
    </>
  );
};

export default ScheduleJob;
