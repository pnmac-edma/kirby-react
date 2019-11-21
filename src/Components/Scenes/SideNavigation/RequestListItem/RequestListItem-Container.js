import { connect } from 'react-redux';
import RequestListItem from './RequestListItem';
import { requestInboxAlert } from '../../../../Actions/requestInboxAlertActions';

const mapStateToProps = state => {
  return {
    requestListItemsName: ['Inbox', 'Sent', 'Archive'],
    newAlerts: state.requestInboxAlert.alert
  };
};
const mapDispatchToProps = dispatch => {
  return {
    requestInboxAlert: () => dispatch(requestInboxAlert())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestListItem);
