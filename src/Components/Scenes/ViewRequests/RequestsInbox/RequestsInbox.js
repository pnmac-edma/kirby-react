import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import RequestTableTitle from '../RequestTableTitle';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import { transformRequests } from '../../../../State/helpers';

const RequestsInbox = props => {
  const {
    userEmail,
    userRole,
    requests,
    isLoading,
    approverRequestsFetch,
    governanceRequestsFetch,
    selected,
    setToggleViewCheckbox,
    setToggleViewAllCheckbox
    // setFooterButtonClick // TODO: check if this doing something
  } = props;

  const columns = [
    {
      name: 'Request',
      property: 'databasename'
    }, // placeholder from name property
    {
      name: 'Description',
      property: 'description'
    },
    {
      name: 'Status',
      property: userRole.governance ? 'govstatus' : 'requeststatus'
    },
    {
      name: 'Date Requested',
      property: 'createddate'
    }
  ];

  useEffect(() => {
    if (userRole.governance) {
      // since we are doing client-side pagination, I am just passing in the defaults
      governanceRequestsFetch(4, 200, '');
    } else {
      approverRequestsFetch(userEmail);
    }
  }, [approverRequestsFetch, governanceRequestsFetch, userEmail, userRole]);

  const reqs = transformRequests(requests, userRole);

  const footerButtonText = `${selected.length} request${
    selected.length !== 1 ? 's' : ''
  } selected`;

  return (
    <>
      <RequestTableTitle title="Requests Inbox" />
      <TableWrapper
        isLoading={isLoading}
        selected={selected}
        columns={columns}
        data={reqs}
        setToggleCheckbox={setToggleViewCheckbox}
        setToggleAllCheckbox={setToggleViewAllCheckbox}
        setFirstColLink={(e, id) => console.log(`request ${id} clicked`)}
        footerButtonText={footerButtonText}
        setFooterButtonClick={() => console.log('footer button clicked')}
      />
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
