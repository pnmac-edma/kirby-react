import { connect } from 'react-redux';
import SnackBar from '../../../Presentational/RequestAssets/SnackBar';
import { handleRemoveNotification } from '../../../../Actions/requestAssetActions';

const mapStateToProps = state => {
  return {
    searchResultCopy: state.searchResult.searchResultCopy,
    notification: state.requestAssets.notification,
    message: `The Assets in your request were updated successfully.`
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRemoveNotification: () => dispatch(handleRemoveNotification())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
