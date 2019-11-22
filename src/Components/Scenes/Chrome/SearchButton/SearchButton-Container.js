import { connect } from 'react-redux';
import { handleSearchClick } from '../../../../Actions/searchResultActions';
import SearchButton from './SearchButton';

const mapDispatchToProps = dispatch => {
  return {
    handleSearchClick: () => dispatch(handleSearchClick())
  };
};

export default connect(null, mapDispatchToProps)(SearchButton);
