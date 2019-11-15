import { connect } from 'react-redux';
import TableBodySection from './TableBodySection';
import { requestCheckBoxSelect } from '../../../../Actions/requestAssetActions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    selectedSearchResultCopy: requestAssets.selectedSearchResultCopy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestCheckBoxSelect: e => dispatch(requestCheckBoxSelect(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableBodySection);
