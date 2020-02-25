import { connect } from 'react-redux';
import NotFoundFilter from './NotFoundFilter';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchInput: searchResult.searchInput,
    filterTerm: searchResult.filter.filterTerm
  };
};

export default connect(mapStateToProps)(NotFoundFilter);
