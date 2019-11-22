import { connect } from 'react-redux';
import SearchResults from './SearchResults';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchResultCopy: searchResult.searchResultCopy,
    isLoading: searchResult.isLoading,
    displaySearchResult: searchResult.displaySearchResult
  };
};

export default connect(mapStateToProps)(SearchResults);
