import { connect } from 'react-redux';
import RequestsInbox from './RequestsInbox';
import {
  approverRequestsFetch,
  governanceRequestsFetch
} from '../../../../State/ViewRequests/actions';

const mapStateToProps = ({ viewRequests }) => {
  return {
    requests: viewRequests.inboundRequests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    approverRequestsFetch: approverEmail =>
      dispatch(approverRequestsFetch(approverEmail)),
    governanceRequestsFetch: () => dispatch(governanceRequestsFetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestsInbox);
