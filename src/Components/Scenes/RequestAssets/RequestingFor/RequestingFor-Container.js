import { connect } from 'react-redux';
import {
  employeeAssetsRequest,
  requestSelectValues
} from '../../../../Actions/requestAssetActions';
import RequestingFor from './RequestingFor';

const mapStateToProps = ({ requestAssets }) => {
  return {
    requestedFor: requestAssets.requestedFor,
    selectedOption: requestAssets.selectedOption
  };
};

const mapDispatchToProps = dispatch => {
  return {
    employeeAssetsRequest: () => dispatch(employeeAssetsRequest()),
    requestSelectValues: val => dispatch(requestSelectValues(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestingFor);
