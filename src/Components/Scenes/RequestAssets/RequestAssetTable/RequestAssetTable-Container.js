import { connect } from 'react-redux';
import RequestAssetTable from './RequestAssetTable';

const mapStateToProps = ({ requestAssets }) => {
  return {
    selectedSearchResultCopy: requestAssets.selectedSearchResultCopy
  };
};

export default connect(mapStateToProps)(RequestAssetTable);
