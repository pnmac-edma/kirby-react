import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import RequestTableTitle from '../RequestTableTitle';
import RequestTable from '../RequestTable';
import { transformRequests } from '../../../../State/helpers';
import TableSkeleton from '../../../Presentational/TableSkeleton/TableSkeleton';

const sentRequestsTableColumns = [
  { name: 'Request', property: 'databasename' },
  { name: 'Description', property: 'description' },
  { name: 'Status', property: 'requeststatus' },
  { name: 'Date Requested', property: 'createddate' }
];

const SentRequests = props => {
  const { userEmail, userRole, isLoading, requests, userRequestsFetch } = props;

  useEffect(() => {
    userRequestsFetch(userEmail);
  }, [userRequestsFetch, userEmail]);

  const reqs = transformRequests(requests, userRole);

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
  userEmail: PropTypes.string,
  userRole: PropTypes.shape({
    governance: PropTypes.bool,
    approver: PropTypes.bool
  }),
  isLoading: PropTypes.bool,
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
