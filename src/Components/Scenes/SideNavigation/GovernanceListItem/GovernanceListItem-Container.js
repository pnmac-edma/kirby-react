import { connect } from 'react-redux';
import GovernanceListItem from './GovernanceListItem';

const mapStateToProps = () => {
  return {
    governanceListItemsName: [
      'Business Owners',
      'Governors',
      'Sensitivity Levels'
    ]
  };
};

export default connect(mapStateToProps)(GovernanceListItem);
