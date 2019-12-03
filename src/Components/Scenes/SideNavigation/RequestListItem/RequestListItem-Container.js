import { connect } from 'react-redux';
import RequestListItem from './RequestListItem';
import { approverRequestsFetch } from '../../../../State/ViewRequests/actions';

const mapStateToProps = ({ viewRequests }) => {
  return {
    requestListItemsName: [
      { label: 'Inbox', link: '/requests' },
      { label: 'Sent', link: '/requests/sent' },
      { label: 'Archive', link: '/requests/archive' }
    ],
    inboxAlerts: viewRequests.inboundRequests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    approverRequestsFetch: approverEmail =>
      dispatch(approverRequestsFetch(approverEmail))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestListItem);
