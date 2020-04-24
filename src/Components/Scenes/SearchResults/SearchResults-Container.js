import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import {
  searchResultPageLoad,
  searchResultRequest,
  setToggleSearchCheckbox,
  setToggleSearchAllCheckbox
} from '../../../State/SearchResult/actions';
import { requestAssetsClick } from '../../../State/RequestAsset/actions';

const mapStateToProps = ({ searchResult }) => {
  return {
    isLoading: searchResult.isLoading,
    displaySearchResult: searchResult.displaySearchResult,
    searchedInput: searchResult.searchedInput,
    searchResult: searchResult.searchResult,
    selected: searchResult.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchResultPageLoad: params => dispatch(searchResultPageLoad(params)),
    searchResultRequest: () => dispatch(searchResultRequest()),
    setToggleSearchCheckbox: (selected, id) =>
      dispatch(setToggleSearchCheckbox(selected, id)),
    setToggleSearchAllCheckbox: (selected, data) =>
      dispatch(setToggleSearchAllCheckbox(selected, data)),
    requestAssetsClick: (selected, data) =>
      dispatch(requestAssetsClick(selected, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
