import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RequestTableTitle from '../RequestTableTitle/RequestTableTitle';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import { transformRequests } from '../../../../State/helpers';
import {
  approverRequestsFetch,
  governanceRequestsFetch,
  setToggleViewCheckbox,
  setToggleViewAllCheckbox
} from '../../../../State/ViewRequests/actions';

const RequestsInbox = () => {
  const { inboundRequests, isLoading, selectedRequests } = useSelector(
    ({ viewRequests }: any) => viewRequests
  );
  const userEmail = useSelector(({ currentUser }: any) => currentUser.EmpEmail);
  const userRole = useSelector(({ currentUser }: any) => currentUser.role);
  const dispatch = useDispatch();

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
  const numReqSelected =
    selectedRequests.length > 0 ? selectedRequests.length : '';
  const isPlurl = selectedRequests.length !== 1 ? 's' : '';
  const footerButtonText = `Archive ${numReqSelected} request${isPlurl}`;

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
        setToggleCheckbox={(selected: Array<number>, id: number) =>
          dispatch(setToggleViewCheckbox(selected, id))
        }
        setToggleAllCheckbox={(selected: Array<number>, data: Array<number>) =>
          dispatch(setToggleViewAllCheckbox(selected, data))
        }
        setFirstColLink={(e: React.ChangeEvent, id: number) =>
          console.log(`request ${id} clicked`)
        }
        footerButtonText={footerButtonText}
        setFooterButtonClick={() => console.log('footer button clicked')}
      />
    </>
  );
};

export default RequestsInbox;
