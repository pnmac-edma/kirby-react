import { connect } from 'react-redux';
import RequestedBy from './RequestedBy';

const mapStateToProps = ({ requestAssets }) => {
  return {
    requestedBy: `Scott Fowles`
  };
};

export default connect(mapStateToProps)(RequestedBy);
