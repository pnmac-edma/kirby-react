import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField
} from '@material-ui/core';
import { color, fontSize } from '@edma/design-tokens';
import { makeStyles } from '@material-ui/core/styles';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import { setField } from '../../../../State/JobCalendar/actions';

const useStyles = makeStyles(theme => ({
  flexStructure: {
    display: 'flex',
    justifyContent: 'left'
  },
  sidebar: {
    background: theme.palette.type === 'light' ? color.g100 : color.g800,
    fontSize: fontSize[1],
    marginTop: '-10rem',
    marginBottom: '-10rem',
    overflow: 'hidden',
    paddingTop: '10rem',
    maxWidth: 430,
    minWidth: 300,
    width: '100%'
  },
  sideTable: {
    width: '70%'
  },
  sideBarPostion: {
    margin: '0 1rem',
    color: theme.palette.type === 'light' ? color.black : color.white
  },
  dividerStyle: {
    width: '100%',
    marginBottom: 32,
    marginTop: 24
  },
  heading: {
    margin: '1rem 0 2rem',
    color: theme.palette.type === 'light' ? color.black : color.white
  }
}));

const ViewJobs = () => {
  const classes = useStyles();
  const { mySelectedJobs, otherSelectedJobs, searchJobsText } = useSelector(
    ({ jobCalendar }: any) => jobCalendar
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: add action with saga that calls a list of jobs
  }, []);

  const columns = [
    { name: 'Name', property: 'name' },
    { name: 'Status', property: 'status' }
  ];

  const mockData = [
    { Id: 'dsfjasfdas', name: 'i am name', status: 'approved' },
    { Id: 'ddsafaa', name: 'i am another name', status: 'declined' }
  ];
  const mockMyJobs = ['Scott Fowles', 'EDMA Team'];
  const mockOtherJobs = ['Eric Barrow', 'Jonathan de la Rosa'];

  const setTitleText = () => 'Current Jobs';

  return (
    <div className={classes.flexStructure}>
      <div className={classes.sidebar}>
        <div className={classes.sideBarPostion}>
          <h3 className={classes.heading}>My Jobs</h3>
          {mockMyJobs.map((cal: string, i: number) => (
            <FormControlLabel
              key={`${cal}-${i}`}
              label={cal}
              control={
                <Checkbox
                  checked={mySelectedJobs.includes(cal)}
                  onChange={() => dispatch(setField('mySelectedJobs', cal))}
                  value={cal}
                  inputProps={{ 'aria-label': `${cal}-checkbox` }}
                />
              }
            />
          ))}
          <Button color="primary">Job Sharing</Button>
          <Divider className={classes.dividerStyle} />
          <h3 className={classes.heading}>Other Jobs</h3>
          {mockOtherJobs.map((cal: string, i: number) => (
            <FormControlLabel
              key={`${cal}-${i}`}
              label={cal}
              control={
                <Checkbox
                  checked={otherSelectedJobs.includes(cal)}
                  onChange={e => dispatch(setField('otherSelectedJobs', cal))}
                  value={cal}
                  inputProps={{ 'aria-label': `${cal}-checkbox` }}
                />
              }
            />
          ))}
          <Button color="primary">Add People</Button>
        </div>
      </div>

      <div className={classes.sideTable}>
        <TextField
          id="search-jobs"
          label="Search Jobs"
          value={searchJobsText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(setField('searchJobsText', e.target.value))
          }
        />
        <TableWrapper
          columns={columns}
          data={mockData}
          setTitleText={setTitleText}
          filter={['Name', 'Status']}
        />
      </div>
    </div>
  );
};

export default ViewJobs;
