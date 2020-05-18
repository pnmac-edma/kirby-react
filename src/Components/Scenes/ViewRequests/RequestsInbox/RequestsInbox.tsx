import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RequestTableTitle from '../RequestTableTitle/RequestTableTitle';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import { transformRequests } from '../../../../State/helpers';
import {
  approverRequestsFetch,
  governanceRequestsFetch
  // setToggleViewCheckbox,
  // setToggleViewAllCheckbox
} from '../../../../State/ViewRequests/actions';

const RequestsInbox = () => {
  const { inboundRequests, isLoading } = useSelector(
    ({ viewRequests }: any) => viewRequests
  );
  const userEmail = useSelector(({ currentUser }: any) => currentUser.EmpEmail);
  const userRole = useSelector(({ currentUser }: any) => currentUser.role);
  const dispatch = useDispatch();

  const history = useHistory();

  const columns = [
    {
      name: 'Request',
      property: 'requesttype'
    },
    {
      name: 'Description',
      property: 'description'
    },
    {
      name: 'Sensitivity',
      property: 'sensitivity'
    },
    {
      name: 'Date Requested',
      property: 'createddate'
    }
  ];

  const reqs = transformRequests(inboundRequests, userRole);

  useEffect(() => {
    if (userRole.governance) {
      dispatch(governanceRequestsFetch());
    } else {
      dispatch(approverRequestsFetch(userEmail));
    }
  }, [dispatch, userEmail, userRole]);

  return (
    <>
      <RequestTableTitle title="Requests Inbox" />
      <TableWrapper
        isLoading={isLoading}
        columns={columns}
        data={reqs}
        setFirstColLink={(e: React.ChangeEvent, id: number) => {
          const urlWithId = `/requests/${id}`;
          history.push(urlWithId);
        }}
      />
    </>
  );
};

export default RequestsInbox;
