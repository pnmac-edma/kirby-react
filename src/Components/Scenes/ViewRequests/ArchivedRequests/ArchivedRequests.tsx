import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RequestTableTitle from '../RequestTableTitle/RequestTableTitle';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import {
  setToggleArchivedCheckbox,
  setToggleArchivedAllCheckbox,
  archivedRequestsFetch
} from '../../../../State/ViewRequests/actions';

const ArchivedRequests = () => {
  const userEmail = useSelector(({ currentUser }: any) => currentUser.EmpEmail);
  const selected = useSelector(
    ({ viewRequests }: any) => viewRequests.selectedArchivedRequests
  );
  const { archivedRequests } = useSelector((state: any) => state.viewRequests);
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

  const footerButtonText = 'Move to Inbox';

  useEffect(() => {
    dispatch(archivedRequestsFetch(userEmail));
  }, [dispatch, userEmail]);

  return (
    <>
      <RequestTableTitle title="Archived Requests" />
      <TableWrapper
        columns={columns}
        data={archivedRequests}
        footerButtonText={footerButtonText}
        setFirstColLink={(e: React.TouchEvent, id: number) =>
          console.log(`request ${id} clicked`)
        }
        setFooterButtonClick={() => console.log('footer button clicked')}
        selected={selected}
        setToggleCheckbox={(selected: Array<number>, id: number) =>
          dispatch(setToggleArchivedCheckbox(selected, id))
        }
        setToggleAllCheckbox={(selected: Array<number>, data: Array<number>) =>
          dispatch(setToggleArchivedAllCheckbox(selected, data))
        }
      />
    </>
  );
};

export default ArchivedRequests;
