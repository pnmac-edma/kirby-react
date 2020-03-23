import { connect } from 'react-redux';
import PageWrapper from './PageWrapper';

const mapStateToProps = ({ searchResult, currentUser }) => {
  return {
    isSearchClicked: searchResult.isSearchClicked,
    isSearchClosed: searchResult.isSearchClosed,
    sessionToken: currentUser.SessionToken
  };
};

export default connect(mapStateToProps)(PageWrapper);
