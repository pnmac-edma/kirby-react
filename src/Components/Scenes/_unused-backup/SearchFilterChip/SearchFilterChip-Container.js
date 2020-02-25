import { connect } from 'react-redux';
import SearchFilterChip from './SearchFilterChip';
import { handleRemoveChip } from '../../../../Actions/searchResultActions';

const mapStateToProps = ({ searchResult }) => {
  return {
    filterQueries: searchResult.filterQueries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRemoveChip: id => dispatch(handleRemoveChip(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilterChip);
