import { connect } from 'react-redux';
import RemoveSelectedButton from './RemoveSelectedButton';
import { handleModalToggle } from '../../../../Actions/requestAssetActions';

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
    handleModalToggle: () => dispatch(handleModalToggle())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveSelectedButton);
