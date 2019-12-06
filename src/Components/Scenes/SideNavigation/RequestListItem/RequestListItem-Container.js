import { connect } from 'react-redux';
import RequestListItem from './RequestListItem';

const mapStateToProps = ({ currentUser }) => {
  return {
    requestListItemsName: [
      { label: 'Inbox', link: '/requests' },
      { label: 'Sent', link: '/requests/sent' },
      { label: 'Archive', link: '/requests/archive' }
    ],
    currentRole: currentUser.role
  };
};

export default connect(mapStateToProps)(RequestListItem);
