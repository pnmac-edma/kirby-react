import { connect } from 'react-redux';
import Justification from './RequestAssetJustification';
import { justificationHandleInput } from '../../../../State/RequestAsset/actions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    justification: requestAssets.justification
  };
};

const mapDispatchToProps = dispatch => {
  return {
    justificationHandleInput: e => dispatch(justificationHandleInput(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Justification);
