import { connect } from 'react-redux';
import MakeRequests from './MakeRequests';
import { makeRequestsFetch } from '../../../../State/RequestAsset/actions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    notificationMessage: requestAssets.notificationMessage,
    isLoading: requestAssets.isLoading,
    selectedEmployeesLength: requestAssets.selectedEmployees.length,
    justificationLength: requestAssets.justification.length,
    selectedSearchResultCopyLength:
      requestAssets.selectedSearchResultCopy.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeRequestsFetch: () => dispatch(makeRequestsFetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeRequests);
