import { connect } from 'react-redux';
import TableHeadSection from './TableHeadSection';
import { requestCheckBoxSelect } from '../../../../Actions/requestAssetActions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    selectedAll: requestAssets.selectedAll
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
)(TableHeadSection);
