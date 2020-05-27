import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RequestTableTitle from '../RequestTableTitle/RequestTableTitle';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import { archivedRequestsFetch } from '../../../../State/ViewRequests/actions';

const ArchivedRequests = () => {
  const userEmail = useSelector(({ currentUser }: any) => currentUser.EmpEmail);
  const { archivedRequests } = useSelector((state: any) => state.viewRequests);
  const dispatch = useDispatch();

  const history = useHistory();

  const columns = [
    {
      name: 'Request',
      property: 'databasename'
    },
    {
      name: 'Description',
      property: 'description'
    },
    {
      name: 'Status',
      property: 'requeststatus'
    },
    {
      name: 'Date Requested',
      property: 'createddate'
    }
  ];

  useEffect(() => {
    dispatch(archivedRequestsFetch(userEmail));
  }, [dispatch, userEmail]);

  return (
    <>
      <RequestTableTitle title="Archived Requests" />
      <TableWrapper
        columns={columns}
        data={archivedRequests}
        setFirstColLink={(e: React.ChangeEvent, id: number) => {
          const urlWithId = `/requests/${id}`;
          history.push(urlWithId);
        }}
      />
    </>
  );
};

export default ArchivedRequests;
