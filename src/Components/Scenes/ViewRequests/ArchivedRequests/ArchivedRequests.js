import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import RequestTableTitle from '../RequestTableTitle';
import RequestTable from '../RequestTable';
import { transformRequests } from '../../../../State/helpers';

// Approver email is hard-coded until authentication is implemented
const approverEmail = 'jonathan.delarosa@pnmac.com';
const archivedRequestsTableColumns = [
  { name: 'Request', property: 'name' },
  { name: 'Description', property: 'description' },
  { name: 'Status', property: 'requeststatus' },
  { name: 'Date Requested', property: 'createddate' }
];

const ArchivedRequests = props => {
  const { requests, approverRequestsFetch } = props;

  // Fetch all archived requests given for approver's email
  useEffect(() => {
    approverRequestsFetch(approverEmail);
  }, [approverRequestsFetch]);

  const reqs = transformRequests(requests);

  return (
    <>
      <RequestTableTitle title="Archived Requests" />
      <RequestTable
        tableColumns={archivedRequestsTableColumns}
        requests={reqs}
        handleRequestClick={(e, id) => console.log(`request ${id} clicked`)}
        setFooterButtonText={() => 'Move To Inbox'}
        handleFooterButtonClick={() => console.log('footer button clicked')}
      />
    </>
  );
};

ArchivedRequests.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      requeststatus: PropTypes.string,
      createddate: PropTypes.string
    })
  ),
  approverRequestsFetch: PropTypes.func
};

export default ArchivedRequests;
