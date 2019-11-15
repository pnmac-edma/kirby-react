import { connect } from 'react-redux';
import TableSection from './TableSection';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchInput: searchResult.searchInput,
    isLoading: searchResult.isLoading,
    searchResult: searchResult.searchResult,
    isFilterQueriesEmpty: searchResult.isFilterQueriesEmpty
  };
};

export default connect(mapStateToProps)(TableSection);
