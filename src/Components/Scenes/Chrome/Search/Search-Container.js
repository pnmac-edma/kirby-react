import { connect } from 'react-redux';
import Search from './Search';
import {
  searchHandleInput,
  handleKeyPress,
  handleSearchClose
} from '../../../../State/SearchResult/actions';

const mapStateToProps = ({ searchResult }) => {
  return {
    isSearchClicked: searchResult.isSearchClicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchHandleInput: e => dispatch(searchHandleInput(e)),
    handleKeyPress: e => dispatch(handleKeyPress(e)),
    handleSearchClose: e => dispatch(handleSearchClose(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
