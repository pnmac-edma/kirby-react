import { connect } from 'react-redux';
import HydrationListItem from './HydrationListItem';

const mapStateToProps = () => {
  return {
    hydrationListItemsName: ['Add / Transform', 'Destinations']
  };
};

export default connect(mapStateToProps)(HydrationListItem);
