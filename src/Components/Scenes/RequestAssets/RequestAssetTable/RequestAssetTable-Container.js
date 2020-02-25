import { connect } from 'react-redux';
import RequestAssetTable from './RequestAssetTable';
import {
  handleModalToggle,
  requestCheckBoxSelect,
  setToggleAssetCheckbox,
  setToggleAssetAllCheckbox
} from '../../../../Actions/requestAssetActions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    data: requestAssets.selectedSearchResultCopy,
    selectedAll: requestAssets.selectedAll,
    selected: requestAssets.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestCheckBoxSelect: e => dispatch(requestCheckBoxSelect(e)),
    handleModalToggle: () => dispatch(handleModalToggle()),
    setToggleAssetCheckbox: (selected, id) =>
      dispatch(setToggleAssetCheckbox(selected, id)),
    setToggleAssetAllCheckbox: (selected, data) =>
      dispatch(setToggleAssetAllCheckbox(selected, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestAssetTable);
