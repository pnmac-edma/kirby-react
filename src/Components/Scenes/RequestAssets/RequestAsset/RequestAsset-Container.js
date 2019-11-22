import { connect } from 'react-redux';
import RequestAsset from './RequestAsset';

const mapStateToProps = state => {
  return {
    searchResultCopy: state.searchResult.searchResultCopy
  };
};

export default connect(mapStateToProps)(RequestAsset);
