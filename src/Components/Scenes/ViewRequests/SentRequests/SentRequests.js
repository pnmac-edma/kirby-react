import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import RequestTableTitle from '../RequestTableTitle';
import RequestTable from '../RequestTable';
import { transformRequests } from '../../../../State/helpers';
import TableSkeleton from '../../../Presentational/TableSkeleton/TableSkeleton';

// Approver email is hard-coded until authentication is implemented
const userEmail = 'jonathan.delarosa@pnmac.com';
const sentRequestsTableColumns = [
  { name: 'Request', property: 'databasename' },
  { name: 'Description', property: 'description' },
  { name: 'Status', property: 'requeststatus' },
  { name: 'Date Requested', property: 'createddate' }
];

const SentRequests = props => {
  const { isLoading, requests, userRequestsFetch } = props;

  // Fetch all outbound requests for a user
  useEffect(() => {
    userRequestsFetch(userEmail);
  }, [userRequestsFetch]);

  const reqs = transformRequests(requests);

  const setFooterButtonText = selected =>
    `Cancel ${selected.length} request${selected.length !== 1 ? 's' : ''}`;

  return (
    <>
      <RequestTableTitle title="Sent Requests" />
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <RequestTable
          tableColumns={sentRequestsTableColumns}
          requests={reqs}
          handleRequestClick={(e, id) => console.log(`request ${id} clicked`)}
          setFooterButtonText={setFooterButtonText}
          handleFooterButtonClick={() => console.log('footer button clicked')}
        />
      )}
    </>
  );
};

SentRequests.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      // placeholder for name property
      description: PropTypes.string,
      requeststatus: PropTypes.string,
      createddate: PropTypes.string
    })
  ),
  userRequestsFetch: PropTypes.func
};

export default SentRequests;
