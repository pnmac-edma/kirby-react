import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RequestTableTitle from '../RequestTableTitle/RequestTableTitle';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import SnackBar from '../../../Presentational/Modal/SnackBar';
import { transformRequests } from '../../../../State/helpers';
import {
  approverRequestsFetch,
  governanceRequestsFetch,
  setIsRequestInboxNotification
} from '../../../../State/ViewRequests/actions';
import { generateRequestTypeString } from '../../../../State/ViewRequests/helpers';

const RequestsInbox = () => {
  const {
    inboundRequests,
    isLoading,
    isRequestInboxNotification
  } = useSelector(({ viewRequests }: any) => viewRequests);
  const userEmail = useSelector(({ currentUser }: any) => currentUser.EmpEmail);
  const userRole = useSelector(({ currentUser }: any) => currentUser.role);
  const { message } = useSelector(({ viewRequests }: any) => viewRequests);
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
      property: 'requestsensitivity'
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
      <SnackBar
        message={message}
        notification={isRequestInboxNotification}
        handleOpenNotification={() =>
          dispatch(setIsRequestInboxNotification(true))
        }
        handleCloseNotification={() =>
          dispatch(setIsRequestInboxNotification(false))
        }
      />
      <RequestTableTitle title="Requests Inbox" />
      <TableWrapper
        isLoading={isLoading}
        columns={columns}
        data={reqs}
        setFirstColLink={(e: React.ChangeEvent, id: number) => {
          const requestTypeParam = generateRequestTypeString(reqs, id);
          const urlWithId = `/requests/${id}/${requestTypeParam}/approve`;
          history.push(urlWithId);
        }}
      />
    </>
  );
};

export default RequestsInbox;
