import { connect } from 'react-redux';
import RequestAsset from './RequestAsset';
import { getEmployeesFetch } from '../../../../Actions/requestAssetActions';

const mapStateToProps = state => {
  return {
    searchResultCopy: state.searchResult.searchResultCopy,
    openModal: state.requestAssets.openModal,
    notificationMessage: state.requestAssets.notificationMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployeesFetch: () => dispatch(getEmployeesFetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestAsset);
