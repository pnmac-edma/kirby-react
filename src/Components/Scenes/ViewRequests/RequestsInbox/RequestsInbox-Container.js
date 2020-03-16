import { connect } from 'react-redux';
import RequestsInbox from './RequestsInbox';
import {
  approverRequestsFetch,
  governanceRequestsFetch,
  setToggleViewCheckbox,
  setToggleViewAllCheckbox,
  setFooterButtonClick
} from '../../../../State/ViewRequests/actions';

const mapStateToProps = ({ viewRequests, currentUser, searchResult }) => {
  return {
    requests: viewRequests.inboundRequests,
    userEmail: currentUser.EmpEmail,
    userRole: currentUser.role,
    isLoading: viewRequests.isLoading,
    selected: viewRequests.selectedRequests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    approverRequestsFetch: approverEmail =>
      dispatch(approverRequestsFetch(approverEmail)),
    governanceRequestsFetch: (page, size, status) =>
      dispatch(governanceRequestsFetch(page, size, status)),
    setToggleViewCheckbox: (selected, id) =>
      dispatch(setToggleViewCheckbox(selected, id)),
    setToggleViewAllCheckbox: (selected, data) =>
      dispatch(setToggleViewAllCheckbox(selected, data)),
    setFooterButtonClick: e => dispatch(setFooterButtonClick(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestsInbox);
