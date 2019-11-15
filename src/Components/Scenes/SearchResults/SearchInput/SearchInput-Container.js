import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import {
  searchHandleInput,
  searchResultRequest
} from '../../../../Actions/searchResultActions';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchInput: searchResult.searchInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchHandleInput: e => dispatch(searchHandleInput(e)),
    searchResultRequest: () => dispatch(searchResultRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
