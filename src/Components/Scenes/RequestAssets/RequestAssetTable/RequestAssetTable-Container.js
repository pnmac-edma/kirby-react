import { connect } from 'react-redux';
import RequestAssetTable from './RequestAssetTable';
import { requestCheckBoxSelect } from '../../../../Actions/requestAssetActions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    selectedSearchResultCopy: requestAssets.selectedSearchResultCopy,
    selectedAll: requestAssets.selectedAll
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestCheckBoxSelect: e => dispatch(requestCheckBoxSelect(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestAssetTable);
