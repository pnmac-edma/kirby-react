import { connect } from 'react-redux';
import RemoveSelectedButton from './RemoveSelectedButton';
import { handleModalOpen } from '../../../../Actions/requestAssetActions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    textField: `Remove Selected`,
    selectedOption: requestAssets.selectedOption,
    selectedSearchResultCopy: requestAssets.selectedSearchResultCopy.filter(
      val => val.chec
    ),
    openModal: requestAssets.openModal
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleModalOpen: () => dispatch(handleModalOpen())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveSelectedButton);
