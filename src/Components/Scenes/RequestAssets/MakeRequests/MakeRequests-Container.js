import { connect } from 'react-redux';
import MakeRequests from './MakeRequests';

const mapStateToProps = ({ requestAssets }) => {
  return {
    TextButton: 'Hello'
  };
};

export default connect(mapStateToProps)(MakeRequests);
