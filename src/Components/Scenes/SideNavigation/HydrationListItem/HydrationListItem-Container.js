import { connect } from 'react-redux';
import HydrationListItem from './HydrationListItem';

const mapStateToProps = () => {
  return {
    hydrationListItemsName: [
      { label: 'Add / Transform', link: '/hydration/add-transform' },
      { label: 'Destinations', link: '/hydration/destinations' }
    ]
  };
};

export default connect(mapStateToProps)(HydrationListItem);
