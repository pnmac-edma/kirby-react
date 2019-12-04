import { connect } from 'react-redux';
import HydrationListItem from './HydrationListItem';

const mapStateToProps = () => {
  return {
    hydrationListItemsName: [
      { label: 'New Destination', link: '/hydration/new-destination' },
      { label: 'New Job', link: '/hydration/new-job' },
      { label: 'View Jobs', link: '/hydration/view-jobs' }
    ]
  };
};

export default connect(mapStateToProps)(HydrationListItem);
