import { connect } from 'react-redux';
import RequestedBy from './RequestedBy';

// This will get updated when Auth is done
const mapStateToProps = ({ requestAssets }) => {
  return {
    requestedBy: `Scott Fowles`
  };
};

export default connect(mapStateToProps)(RequestedBy);
