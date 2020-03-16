import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import RequestTableTitle from '../RequestTableTitle';
import { transformRequests } from '../../../../State/helpers';
import TableWrapper from '../../../Presentational/Table/TableWrapper';

// TODO: need to check if api is broken or request is broken
//       table is currently not working
const SentRequests = props => {
  const {
    userEmail,
    userRole,
    isLoading,
    requests,
    userRequestsFetch,
    selected,
    setToggleSentCheckbox,
    setToggleSentAllCheckbox
  } = props;

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

  useEffect(() => {
    userRequestsFetch(userEmail);
  }, [userRequestsFetch, userEmail]);

  const reqs = transformRequests(requests, userRole);

  const footerButtonText = `Cancel ${selected.length} request${
    selected.length !== 1 ? 's' : ''
  }`;

  return (
    <>
      <RequestTableTitle title="Sent Requests" />
      <TableWrapper
        isLoading={isLoading}
        selected={selected}
        columns={columns}
        data={reqs}
        setToggleCheckbox={setToggleSentCheckbox}
        setToggleAllCheckbox={setToggleSentAllCheckbox}
        footerButtonText={footerButtonText}
        setFirstColLink={(e, id) => console.log(`request ${id} clicked`)}
        setFooterButtonClick={() => console.log('footer button clicked')}
      />
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
