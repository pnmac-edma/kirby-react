import { connect } from 'react-redux';
import RequestsInbox from './RequestsInbox';
import {
  approverRequestsFetch,
  governanceRequestsFetch
} from '../../../../State/ViewRequests/actions';

const mapStateToProps = ({ viewRequests, currentUser }) => {
  return {
    requests: viewRequests.inboundRequests,
    userEmail: currentUser.EmpEmail,
    userRole: currentUser.role
  };
};

const mapDispatchToProps = dispatch => {
  return {
    approverRequestsFetch: approverEmail =>
      dispatch(approverRequestsFetch(approverEmail)),
    governanceRequestsFetch: (page, size, status) => {
      dispatch(governanceRequestsFetch(page, size, status));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestsInbox);
