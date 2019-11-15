import { connect } from 'react-redux';
import RequestTable from './RequestAsset';

const mapStateToProps = state => {
  return {
    searchResultCopy: state.searchResult.searchResultCopy
  };
};

export default connect(mapStateToProps)(RequestTable);
