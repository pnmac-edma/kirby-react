import { connect } from 'react-redux';
import PageWrapper from './PageWrapper';

const mapStateToProps = ({ searchResult }) => {
  return {
    isSearchClicked: searchResult.isSearchClicked
  };
};

export default connect(mapStateToProps)(PageWrapper);
