import React, { useEffect } from 'react';
import RequestTableTitle from '../RequestTableTitle';
import RequestTable from '../RequestTable';
import { transformRequests } from '../../../../State/helpers';

const APPROVER_EMAIL = 'jonathan.delarosa@pnmac.com';
const requestsInboxTableColumns = [
  { name: 'Request', property: 'databasename' },
  { name: 'Description', property: 'description' },
  { name: 'Status', property: 'requeststatus' },
  { name: 'Date Requested', property: 'createddate' }
];

const RequestsInbox = props => {
  const { requests, approverRequestsFetch } = props;

  // Fetch all inbound requests given for approver's email
  useEffect(() => {
    approverRequestsFetch(APPROVER_EMAIL);
  }, [approverRequestsFetch]);

  const reqs = transformRequests(requests);

  const setFooterButtonText = selected =>
    `${selected.length} request${selected.length !== 1 ? 's' : ''} selected`;

  return (
    <>
      <RequestTableTitle title="Requests Inbox" />
      <RequestTable
        tableColumns={requestsInboxTableColumns}
        requests={reqs}
        handleRequestClick={(e, id) => console.log(`request ${id} clicked`)}
        setFooterButtonText={setFooterButtonText}
        handleFooterButtonClick={() => console.log('footer button clicked')}
      />
    </>
  );
};

export default RequestsInbox;
