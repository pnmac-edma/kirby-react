import { connect } from 'react-redux';
import RequestedBy from './RequestedBy';

// TODO This will get updated when Auth is done
const mapStateToProps = ({ currentUser }) => {
  return {
    requestedBy: currentUser.EmpEmail
  };
};

export default connect(mapStateToProps)(RequestedBy);
