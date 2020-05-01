import { connect } from 'react-redux';
import {
  searchHandleInput,
  searchResultRequest,
  handleKeyPress
} from '../../../../State/SearchResult/actions';
import AppBar from './AppBar';

const mapStateToProps = ({ searchResult }) => {
  return {
    isLoading: searchResult.isLoading
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
