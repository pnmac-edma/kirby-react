import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import RequestTableTitle from '../RequestTableTitle';
import RequestTable from '../RequestTable';
import { transformRequests } from '../../../../State/helpers';
import TableSkeleton from '../../../Presentational/TableSkeleton/TableSkeleton';

const RequestsInbox = props => {
  const {
    userEmail,
    userRole,
    requests,
    isLoading,
    approverRequestsFetch,
    governanceRequestsFetch
  } = props;
  const requestsInboxTableColumns = [
    { name: 'Request', property: 'databasename' }, // placeholder from name property
    { name: 'Description', property: 'description' },
    {
      name: 'Status',
      property: userRole.governance ? 'govstatus' : 'requeststatus'
    },
    { name: 'Date Requested', property: 'createddate' }
  ];

  useEffect(() => {
    if (userRole.governance) {
      // since we are doing client-side pagination, I am just passing in the defaults
      governanceRequestsFetch(4, 200, '');
    } else {
      console.log('you are an approver: ', userEmail);
    }
  }, [approverRequestsFetch, governanceRequestsFetch, userEmail, userRole]);

  const reqs = transformRequests(requests, userRole);

  const setFooterButtonText = selected =>
    `${selected.length} request${selected.length !== 1 ? 's' : ''} selected`;

  return (
    <>
      <RequestTableTitle title="Requests Inbox" />
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <RequestTable
          tableColumns={requestsInboxTableColumns}
          requests={reqs}
          handleRequestClick={(e, id) => console.log(`request ${id} clicked`)}
          setFooterButtonText={setFooterButtonText}
          handleFooterButtonClick={() => console.log('footer button clicked')}
        />
      )}
    </>
  );
};

RequestsInbox.propTypes = {
  userEmail: PropTypes.string,
  userRole: PropTypes.shape({
    governance: PropTypes.bool,
    approver: PropTypes.bool
  }),
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      // placeholder for name property
      description: PropTypes.string,
      requeststatus: PropTypes.string,
      createddate: PropTypes.string
    })
  ),
  isLoading: PropTypes.bool,
  approverRequestsFetch: PropTypes.func,
  governanceRequestsFetch: PropTypes.func
};

export default RequestsInbox;
