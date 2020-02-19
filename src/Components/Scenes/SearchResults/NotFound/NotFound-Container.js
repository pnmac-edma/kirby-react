import { connect } from 'react-redux';
import NotFound from './NotFound';

const mapStateToProps = ({ searchResult }) => {
  return {
    searchedInput: searchResult.searchedInput
  };
};

export default connect(mapStateToProps)(NotFound);
