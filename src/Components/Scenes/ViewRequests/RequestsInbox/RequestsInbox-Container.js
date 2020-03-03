import { connect } from 'react-redux';
import RequestsInbox from './RequestsInbox';
import {
  approverRequestsFetch,
  governanceRequestsFetch,
  handleFooterButtonClick
} from '../../../../State/ViewRequests/actions';

const mapStateToProps = ({ viewRequests, currentUser }) => {
  return {
    requests: viewRequests.inboundRequests,
    userEmail: currentUser.EmpEmail,
    userRole: currentUser.role,
    isLoading: viewRequests.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    approverRequestsFetch: approverEmail =>
      dispatch(approverRequestsFetch(approverEmail)),
    governanceRequestsFetch: (page, size, status) => {
      dispatch(governanceRequestsFetch(page, size, status));
    },
    handleFooterButtonClick: e => dispatch(handleFooterButtonClick(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestsInbox);
