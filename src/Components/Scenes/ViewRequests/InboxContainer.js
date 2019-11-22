import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RequestTableTitle from './RequestTableTitle';
import RequestTable from './RequestTable';
import { approverRequestsFetch } from '../../../State/ViewRequests/actions';

const InboxContainer = props => {
  const { approverRequestsFetch, requests } = props;

  // Fetch all inbound requests given for approver's email
  useEffect(() => {
    approverRequestsFetch('eric.barrow@pnmac.com');
  }, []);

  // TODO: Move this to the reducer or saga call
  // What data do we need to keep from this?
  const reqs = requests.map(request => {
    const reqData = JSON.parse(request.requestdata);
    return {
      ...request,
      databasename: request.databasename || '',
      requestdata: reqData,
      description: reqData.description || ''
    };
  });

  const tableColumns = [
    { name: 'Request', id: 0 },
    { name: 'Description', id: 1 },
    { name: 'Status', id: 2 },
    { name: 'Date Requested', id: 3 }
  ];

  return (
    <>
      <RequestTableTitle title="Requests Inbox" />
      <RequestTable tableColumns={tableColumns} requests={reqs} />
    </>
  );
};

const mapStateToProps = ({ viewRequests }) => {
  return {
    requests: viewRequests.inboundRequests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    approverRequestsFetch: approverEmail =>
      dispatch(approverRequestsFetch(approverEmail))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InboxContainer);
