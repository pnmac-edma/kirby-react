import { connect } from 'react-redux';
import NotFound from './NotFound';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchInput: searchResult.searchInput
  };
};

export default connect(mapStateToProps)(NotFound);
