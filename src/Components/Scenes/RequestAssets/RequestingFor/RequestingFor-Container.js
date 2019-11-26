import { connect } from 'react-redux';
import {
  getEmployeesFetch,
  handleSelectedEmployees
} from '../../../../Actions/requestAssetActions';
import RequestingFor from './RequestingFor';

const mapStateToProps = ({ requestAssets }) => {
  return {
    employees: requestAssets.employees,
    selectedEmployees: requestAssets.selectedEmployees
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployeesFetch: () => dispatch(getEmployeesFetch()),
    handleSelectedEmployees: val => dispatch(handleSelectedEmployees(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestingFor);
