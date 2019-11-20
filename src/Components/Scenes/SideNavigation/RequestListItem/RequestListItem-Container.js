import { connect } from 'react-redux';
import RequestListItem from './RequestListItem';
import { requestInboxAlert } from '../../../../Actions/requestInboxAlertActions';

const mapStateToProps = () => {
  return {
    requestListItemsName: ['Inbox', 'Sent', 'Archive']
  };
};
const mapDispatchToProps = dispatch => {
  return {
    requestInboxAlert: () => dispatch(requestInboxAlert())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestListItem);
