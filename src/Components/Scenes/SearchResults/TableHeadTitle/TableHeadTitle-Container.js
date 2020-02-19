import { connect } from 'react-redux';
import TableHeadTitle from './TableHeadTitle';
import { handleFilterClick } from '../../../../Actions/searchResultActions';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchedInput: searchResult.searchedInput,
    isFilterClick: searchResult.isFilterClick
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFilterClick: () => dispatch(handleFilterClick())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableHeadTitle);
