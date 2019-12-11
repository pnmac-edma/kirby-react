import { connect } from 'react-redux';
import SentRequests from './SentRequests';
import { userRequestsFetch } from '../../../../State/ViewRequests/actions';

const mapStateToProps = ({ viewRequests, currentUser }) => {
  return {
    requests: viewRequests.outboundRequests,
    isLoading: viewRequests.isLoading,
    userEmail: currentUser.EmpEmail,
    userRole: currentUser.role
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userRequestsFetch: createdbyemail =>
      dispatch(userRequestsFetch(createdbyemail))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SentRequests);
