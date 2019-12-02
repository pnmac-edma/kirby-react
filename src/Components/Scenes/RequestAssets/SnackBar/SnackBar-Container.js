import { connect } from 'react-redux';
import SnackBar from '../../../Presentational/RequestAssets/SnackBar';
import { handleRemoveNotification } from '../../../../Actions/requestAssetActions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    notification: requestAssets.notification,
    message: `The Assets in your request were updated successfully.`
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRemoveNotification: () => dispatch(handleRemoveNotification())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
