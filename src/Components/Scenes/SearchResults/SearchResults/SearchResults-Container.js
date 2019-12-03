import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import {
  searchResultPageLoad,
  searchResultRequest
} from '../../../../Actions/searchResultActions';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchResultCopy: searchResult.searchResultCopy,
    isLoading: searchResult.isLoading,
    displaySearchResult: searchResult.displaySearchResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchResultPageLoad: params => dispatch(searchResultPageLoad(params)),
    searchResultRequest: () => dispatch(searchResultRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
