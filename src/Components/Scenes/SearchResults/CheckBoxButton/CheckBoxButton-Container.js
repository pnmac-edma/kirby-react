import { connect } from 'react-redux';
import CheckBoxButton from './CheckBoxButton';
import { requestAssetsClick } from '../../../../Actions/requestAssetActions';

const mapStateToProps = state => {
  return {
    searchResultCopy: state.searchResult.searchResultCopy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAssetsClick: obj => dispatch(requestAssetsClick(obj))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckBoxButton);
