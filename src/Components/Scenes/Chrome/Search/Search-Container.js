import { connect } from 'react-redux';
import Search from './Search';
import {
  searchHandleInput,
  searchResultRequest,
  handleKeyPress
} from '../../../../Actions/searchResultActions';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchInput: searchResult.searchInput,
    isSearchClicked: searchResult.isSearchClicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchHandleInput: e => dispatch(searchHandleInput(e)),
    searchResultRequest: () => dispatch(searchResultRequest()),
    handleKeyPress: e => dispatch(handleKeyPress(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
