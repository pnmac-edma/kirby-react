import { connect } from 'react-redux';
import TableSection from './TableSection';
import { requestAssetsClick } from '../../../../Actions/requestAssetActions';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchInput: searchResult.searchInput,
    isLoading: searchResult.isLoading,
    searchResult: searchResult.searchResult,
    isFilterQueriesEmpty: searchResult.isFilterQueriesEmpty,
    rowsPerPage: searchResult.rowsPerPage,
    searchResultCopy: searchResult.searchResultCopy,
    rowsPerPageOptions: searchResult.rowsPerPageOptions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAssetsClick: e => dispatch(requestAssetsClick(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableSection);
