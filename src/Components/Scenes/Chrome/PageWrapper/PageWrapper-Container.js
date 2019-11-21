import { connect } from 'react-redux';
import PageWrapper from './PageWrapper';

const mapStateToProps = ({ searchResult }) => {
  return {
    isSearchClicked: searchResult.isSearchClicked,
    isSearchClosed: searchResult.isSearchClosed
  };
};

export default connect(mapStateToProps)(PageWrapper);
