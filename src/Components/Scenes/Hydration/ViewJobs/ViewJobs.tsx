import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';
import { InputAdornment, IconButton, TextField } from '@material-ui/core';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import { setField } from '../../../../State/JobCalendar/actions';

const useStyles = makeStyles(theme => ({
  searchBar: {
    marginLeft: theme.spacing(1.5),
    width: '25%'
  }
}));

const ViewJobs = () => {
  const classes = useStyles();

  const { searchJobsText } = useSelector(({ jobCalendar }: any) => jobCalendar);
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: add action with saga that calls a list of jobs
  }, []);

  const columns = [
    { name: 'Name', property: 'name' },
    { name: 'Status', property: 'status' }
  ];

  const mockData = [
    { Id: 5, name: 'i am name', status: 'approved' },
    { Id: 6, name: 'i am another name', status: 'declined' }
  ];

  const setTitleText = () => 'Current Jobs';

  return (
    <div>
      <TextField
        className={classes.searchBar}
        id="search-jobs"
        label="Search Jobs"
        value={searchJobsText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setField('searchJobsText', e.target.value))
        }
        onKeyPress={e => {
          // TODO: add enter keypress functionality
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  // TODO: add click button functionality
                }}
              >
                <Search />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <TableWrapper
        columns={columns}
        data={mockData}
        setTitleText={setTitleText}
        filter={['Name', 'Status']}
      />
    </div>
  );
};

export default ViewJobs;
