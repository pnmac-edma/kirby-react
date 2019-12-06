import { connect } from 'react-redux';
import RequestsInbox from './RequestsInbox';
import { approverRequestsFetch } from '../../../../State/ViewRequests/actions';

const mapStateToProps = ({ viewRequests }) => {
  return {
    requests: viewRequests.inboundRequests,
    isLoading: viewRequests.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    approverRequestsFetch: approverEmail =>
      dispatch(approverRequestsFetch(approverEmail))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestsInbox);
