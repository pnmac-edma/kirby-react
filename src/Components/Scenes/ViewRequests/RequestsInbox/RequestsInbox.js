import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import RequestTableTitle from '../RequestTableTitle';
import RequestTable from '../RequestTable';
import { transformRequests } from '../../../../State/helpers';

// Approver email is hard-coded until authentication is implemented
const approverEmail = 'jonathan.delarosa@pnmac.com';
const requestsInboxTableColumns = [
  { name: 'Request', property: 'databasename' }, // placeholder from name property
  { name: 'Description', property: 'description' },
  { name: 'Status', property: 'requeststatus' },
  { name: 'Date Requested', property: 'createddate' }
];

const RequestsInbox = props => {
  const {
    userEmail,
    userRole,
    requests,
    approverRequestsFetch,
    governanceRequestsFetch
  } = props;

  useEffect(() => {
    if (userRole.governance) {
      governanceRequestsFetch(4, 200, '');
    } else {
      approverRequestsFetch(userEmail);
    }
  }, [approverRequestsFetch, governanceRequestsFetch, userEmail, userRole]);

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

RequestsInbox.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      // placeholder for name property
      description: PropTypes.string,
      requeststatus: PropTypes.string,
      createddate: PropTypes.string
    })
  ),
  approverRequestsFetch: PropTypes.func
};

export default RequestsInbox;
