import { connect } from 'react-redux';
import RequestListItem from './RequestListItem';
import initialState from '../../../../Reducers/initialState';

const mapStateToProps = state => {
  return {
    requestListItemsName: [
      { label: 'Inbox', link: '/requests' },
      { label: 'Sent', link: '/requests/sent' },
      { label: 'Archive', link: '/requests/archive' }
    ],
    initialState: initialState.currentUser.role.approver
  };
};

export default connect(mapStateToProps)(RequestListItem);
