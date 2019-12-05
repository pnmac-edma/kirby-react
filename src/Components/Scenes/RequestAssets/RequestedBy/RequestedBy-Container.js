import { connect } from 'react-redux';
import RequestedBy from './RequestedBy';

// TODO This will get updated when Auth is done
const mapStateToProps = ({ requestAssets }) => {
  return {
    requestedBy: `selcuk.ates@pnmac.com`
  };
};

export default connect(mapStateToProps)(RequestedBy);
