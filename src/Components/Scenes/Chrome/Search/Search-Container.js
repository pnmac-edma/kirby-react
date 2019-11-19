import { connect } from 'react-redux';
import Search from './Search';
import {
  searchHandleInput,
  searchResultRequest,
  handleKeyPress,
  handleSearchClick
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
    handleKeyPress: e => dispatch(handleKeyPress(e)),
    handleSearchClick: () => dispatch(handleSearchClick())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
