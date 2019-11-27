import { connect } from 'react-redux';
import GovernanceListItem from './GovernanceListItem';

const mapStateToProps = () => {
  return {
    governanceListItemsName: [
      { label: 'Business Owners', link: '/governance/business-owners' },
      { label: 'Governors', link: '/governance/governors' },
      { label: 'Sensitivity Levels', link: '/governance/sensitivity-levels' }
    ]
  };
};

export default connect(mapStateToProps)(GovernanceListItem);
