import { connect } from 'react-redux';
import TableHeadSection from './TableHeadSection';
import {
  handleCheckBoxSelect,
  searchResultSortRequest
} from '../../../../Actions/searchResultActions';

const mapStateToProps = ({ searchResult }) => {
  return {
    selectedAll: searchResult.selectedAll,
    sortBy: searchResult.sortBy,
    isFilterQueriesEmpty: searchResult.isFilterQueriesEmpty
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleCheckBoxSelect: e => dispatch(handleCheckBoxSelect(e)),
    searchResultSortRequest: e => dispatch(searchResultSortRequest(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHeadSection);
