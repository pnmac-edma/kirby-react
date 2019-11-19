import { connect } from 'react-redux';
import RequestListItem from './RequestListItem';

const mapStateToProps = () => {
  return {
    requestListItemsName: ['Inbox', 'Sent', 'Archive']
  };
};

export default connect(mapStateToProps)(RequestListItem);
