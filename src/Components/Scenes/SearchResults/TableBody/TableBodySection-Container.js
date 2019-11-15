import { connect } from 'react-redux';
import TableBodySection from './TableBodySection';
import { handleCheckBoxSelect } from '../../../../Actions/searchResultActions';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchResult: searchResult.searchResult,
    selectedAll: searchResult.selectedAll,
    selectCheckBoxes: searchResult.selectCheckBoxes,
    searchResultCopy: searchResult.searchResultCopy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCheckBoxSelect: e => dispatch(handleCheckBoxSelect(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableBodySection);
