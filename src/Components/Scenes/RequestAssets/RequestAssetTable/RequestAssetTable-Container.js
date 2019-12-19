import { connect } from 'react-redux';
import RequestAssetTable from './RequestAssetTable';
import {
  requestCheckBoxSelect,
  handleModalToggle
} from '../../../../Actions/requestAssetActions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    selectedSearchResultCopy: requestAssets.selectedSearchResultCopy,
    selectedAll: requestAssets.selectedAll
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestCheckBoxSelect: e => dispatch(requestCheckBoxSelect(e)),
    handleModalToggle: e => dispatch(handleModalToggle(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestAssetTable);
