import { connect } from 'react-redux';
import SnackBar from '../../../Presentational/RequestAssets/SnackBar';

const mapStateToProps = ({ requestAssets }) => {
  return {
    message: `The Assets in your request were updated successfully.`
  };
};

export default connect(mapStateToProps)(SnackBar);
