import { connect } from 'react-redux';
import MakeRequests from './MakeRequests';
import { makeRequestsFetch } from '../../../../Actions/requestAssetActions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    notificationMessage: requestAssets.notificationMessage,
    isLoading: requestAssets.isLoading,
    selectedEmployees: requestAssets.selectedEmployees.length,
    justification: requestAssets.justification.length,
    selectedSearchResultCopy: requestAssets.selectedSearchResultCopy.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeRequestsFetch: () => dispatch(makeRequestsFetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeRequests);
