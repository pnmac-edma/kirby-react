import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RequestTableTitle from '../RequestTableTitle/RequestTableTitle';
import { transformRequests } from '../../../../State/helpers';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import {
  setToggleSentCheckbox,
  setToggleSentAllCheckbox,
  userRequestsFetch
} from '../../../../State/ViewRequests/actions';

// TODO: need to check if api is broken or request is broken
//       table is currently not working
const SentRequests = () => {
  const { outboundRequests, isLoading, selectedSentRequests } = useSelector(
    ({ viewRequests }: any) => viewRequests
  );
  const userEmail = useSelector(({ currentUser }: any) => currentUser.EmpEmail);
  const userRole = useSelector(({ currentUser }: any) => currentUser.role);
  const dispatch = useDispatch();

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

  const reqs = transformRequests(outboundRequests, userRole);
  const numReqSelected =
    selectedSentRequests.length > 0 ? selectedSentRequests.length : '';
  const isPlurl = selectedSentRequests.length !== 1 ? 's' : '';
  const footerButtonText = `Cancel ${numReqSelected} request${isPlurl}`;

  useEffect(() => {
    dispatch(userRequestsFetch(userEmail));
  }, [dispatch, userEmail]);

  return (
    <>
      <RequestTableTitle title="Sent Requests" />
      <TableWrapper
        isLoading={isLoading}
        selected={selectedSentRequests}
        columns={columns}
        data={reqs}
        setToggleCheckbox={(selected: Array<number>, id: number) =>
          dispatch(setToggleSentCheckbox(selected, id))
        }
        setToggleAllCheckbox={(selected: Array<number>, data: Array<number>) =>
          dispatch(setToggleSentAllCheckbox(selected, data))
        }
        footerButtonText={footerButtonText}
        setFirstColLink={(e: React.ChangeEvent, id: number) =>
          console.log(`request ${id} clicked`)
        }
        setFooterButtonClick={() => console.log('footer button clicked')}
      />
    </>
  );
};

export default SentRequests;
