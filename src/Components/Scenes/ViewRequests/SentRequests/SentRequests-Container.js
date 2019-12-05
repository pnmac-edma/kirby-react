import { connect } from 'react-redux';
import SentRequests from './SentRequests';
import { userRequestsFetch } from '../../../../State/ViewRequests/actions';

const mapStateToProps = ({ viewRequests }) => {
  return {
    requests: viewRequests.outboundRequests,
    isLoading: viewRequests.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userRequestsFetch: createdbyemail =>
      dispatch(userRequestsFetch(createdbyemail))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SentRequests);
