import { connect } from 'react-redux';
import {
  searchHandleInput,
  searchResultRequest,
  handleKeyPress
} from '../../../../Actions/searchResultActions';
import AppBar from './AppBar';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchInput: searchResult.searchInput,
    isLoading: searchResult.isLoading,
    displaySearchResult: searchResult.displaySearchResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchHandleInput: e => dispatch(searchHandleInput(e)),
    searchResultRequest: () => dispatch(searchResultRequest()),
    handleKeyPress: e => dispatch(handleKeyPress(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
