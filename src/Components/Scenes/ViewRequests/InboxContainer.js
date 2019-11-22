import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import RequestTableTitle from './RequestTableTitle';
import RequestTable from './RequestTable';
import { approverRequestsFetch } from '../../../State/ViewRequests/actions';
import { transformRequests } from '../../../State/helpers';

const InboxContainer = props => {
  const { approverRequestsFetch, requests } = props;

  // Fetch all inbound requests given for approver's email
  useEffect(() => {
    approverRequestsFetch('jonathan.delarosa@pnmac.com');
  }, []);

  const reqs = transformRequests(requests);

  console.log(reqs);

  const tableColumns = [
    { name: 'Request', property: 'databasename' },
    { name: 'Description', property: 'description' },
    { name: 'Status', property: 'requeststatus' },
    { name: 'Date Requested', property: 'createddate' }
  ];

  const [selected, setSelected] = useState([]);

  const handleToggleCheckbox = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [...selected];

    if (selectedIndex === -1) {
      newSelected.push(id);
    } else {
      newSelected.splice(selectedIndex, 1);
    }
    setSelected(newSelected);
  };

  const handleToggleAllCheckbox = event => {
    if (selected.length === 0) {
      const newSelecteds = requests.map(request => request.Id);
      setSelected(newSelecteds);
      return;
    } else {
      setSelected([]);
    }
  };

  return (
    <>
      <RequestTableTitle title="Requests Inbox" />
      <RequestTable
        tableColumns={tableColumns}
        requests={reqs}
        selected={selected}
        footerButtonText={`${selected.length} requests`}
        handleFooterButtonClick={() => alert('hello!')}
        handleToggleCheckbox={handleToggleCheckbox}
        handleToggleAllCheckbox={handleToggleAllCheckbox}
      />
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
