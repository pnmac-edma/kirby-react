import { connect } from 'react-redux';
import SearchFilter from './SearchFilter';
import {
  handleFilterSelect,
  handleFilterRequest
} from '../../../../Actions/searchResultActions';

const mapStateToProps = ({ searchResult }) => {
  return {
    isFilterClick: searchResult.isFilterClick,
    filterBy: searchResult.filter.filterBy,
    contain: searchResult.filter.contain,
    filterTerm: searchResult.filter.filterTerm,
    selectors: searchResult.selecters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFilterSelect: e => dispatch(handleFilterSelect(e)),
    handleFilterRequest: () => dispatch(handleFilterRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilter);
