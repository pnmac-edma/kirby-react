import { connect } from 'react-redux';
import RequestListItem from './RequestListItem';

const mapStateToProps = () => {
  return {
    requestListItemsName: [
      { label: 'Inbox', link: '/requests' },
      { label: 'Sent', link: '/requests/sent' },
      { label: 'Archive', link: '/requests/archive' }
    ]
  };
};

export default connect(mapStateToProps)(RequestListItem);
