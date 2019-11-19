import { connect } from 'react-redux';
import PageWrapper from './PageWrapper';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchResultCopy: searchResult.searchResultCopy,
    isLoading: searchResult.isLoading,
    displaySearchResult: searchResult.displaySearchResult,
    isSearchClicked: searchResult.isSearchClicked,
    isSearchClosed: searchResult.isSearchClosed
  };
};

export default connect(mapStateToProps)(PageWrapper);
