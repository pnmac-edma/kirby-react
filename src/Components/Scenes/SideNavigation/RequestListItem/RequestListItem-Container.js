import { connect } from 'react-redux';
import RequestListItem from './RequestListItem';

const mapStateToProps = () => {
  return {
    requestListItemsName: [
      { label: 'inbox', link: '/requests' },
      { label: 'sent', link: '/requests/sent' },
      { label: 'archive', link: '/requests/archive' }
    ]
  };
};

export default connect(mapStateToProps)(RequestListItem);
