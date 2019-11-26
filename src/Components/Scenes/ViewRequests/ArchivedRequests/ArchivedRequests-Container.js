import { connect } from 'react-redux';
import ArchivedRequests from './ArchivedRequests';
import { approverRequestsFetch } from '../../../../State/ViewRequests/actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedRequests);
