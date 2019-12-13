import { connect } from 'react-redux';
import Justification from './RequestAssetJustification';
import { justificationHandleInput } from '../../../../Actions/requestAssetActions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    justification: requestAssets.justification
  };
};

const mapDispatchToProps = dispatch => {
  return {
    justificationHandleInput: () => dispatch(justificationHandleInput())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Justification);
