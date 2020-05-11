import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
  const { inboundRequests, isLoading, selectedRequests } = useSelector(
    ({ viewRequests }: any) => viewRequests
  );
  const userEmail = useSelector(({ currentUser }: any) => currentUser.EmpEmail);
  const userRole = useSelector(({ currentUser }: any) => currentUser.role);
  const dispatch = useDispatch();

  const history = useHistory();

  const columns = [
    {
      name: 'Request',
      property: 'databasename'
    }, // placeholder for name property
    {
      name: 'Description',
      property: 'description'
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
        selected={selectedRequests}
        columns={columns}
        data={reqs}
        setFirstColLink={(e: React.ChangeEvent, id: number) => {
          const urlWithId = `/requests?id=${id}`;
          history.push(urlWithId);
        }}

        // TODO: not sure if checkboxes will be needed, kept here for now
        // setToggleCheckbox={(selected: Array<number>, id: number) =>
        //   dispatch(setToggleViewCheckbox(selected, id))
        // }
        // setToggleAllCheckbox={(selected: Array<number>, data: Array<number>) =>
        //   dispatch(setToggleViewAllCheckbox(selected, data))
        // }
      />
    </>
  );
};

export default RequestsInbox;
