import { connect } from 'react-redux';
import SearchResult from './SearchResult';

const mapStateToProps = ({ searchResult }) => {
  return {
    isLoading: searchResult.isLoading,
    displaySearchResult: searchResult.displaySearchResult
  };
};

export default connect(mapStateToProps)(SearchResult);
