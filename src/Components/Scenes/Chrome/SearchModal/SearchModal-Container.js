import { connect } from 'react-redux';
import { handleSearchClick } from '../../../../Actions/searchResultActions';
import SearchModal from './SearchModal';

const mapDispatchToProps = dispatch => {
  return {
    handleSearchClick: () => dispatch(handleSearchClick())
  };
};

export default connect(null, mapDispatchToProps)(SearchModal);
