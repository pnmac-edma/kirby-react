import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import { setField } from '../../../../State/JobCalendar/actions';

const ViewJobs = () => {
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
    { Id: 'dsfjasfdas', name: 'i am name', status: 'approved' },
    { Id: 'ddsafaa', name: 'i am another name', status: 'declined' }
  ];

  const setTitleText = () => 'Current Jobs';

  return (
    <div>
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
  );
};

export default ViewJobs;
