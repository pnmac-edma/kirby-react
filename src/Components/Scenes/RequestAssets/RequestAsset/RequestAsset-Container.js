import { connect } from 'react-redux';
import RequestTable from './RequestAsset';
import { employeeAssetsRequest } from '../../../../Actions/requestAssetActions';

const mapStateToProps = state => {
  return {
    searchResultCopy: state.searchResult.searchResultCopy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    employeeAssetsRequest: () => dispatch(employeeAssetsRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestTable);
