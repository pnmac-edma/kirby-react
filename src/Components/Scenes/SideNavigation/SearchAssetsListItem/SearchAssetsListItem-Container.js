import { connect } from 'react-redux';
import { handleSearchClick } from '../../../../Actions/searchResultActions';
import SearchAssetsListItem from './SearchAssetsListItem';

const mapStateToProps = ({ searchResult }) => {
  return {
    isSearchClicked: searchResult.isSearchClicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchClick: () => dispatch(handleSearchClick())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAssetsListItem);
