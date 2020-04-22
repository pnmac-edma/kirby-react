import { connect } from 'react-redux';
import Search from './Search';
import {
  searchHandleInput,
  searchResultRequest,
  handleKeyPress,
  handleSearchClose
} from '../../../../State/SearchResult/actions';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchInput: searchResult.searchInput,
    isSearchClicked: searchResult.isSearchClicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchHandleInput: e => dispatch(searchHandleInput(e)),
    searchResultRequest: searchInput =>
      dispatch(searchResultRequest(searchInput)),
    handleKeyPress: e => dispatch(handleKeyPress(e)),
    handleSearchClose: e => dispatch(handleSearchClose(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
