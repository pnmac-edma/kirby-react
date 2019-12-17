import { connect } from 'react-redux';
import PageWrapper from './PageWrapper';

const mapStateToProps = ({ searchResult }) => {
  return {
    isSearchClicked: searchResult.isSearchClicked,
    isSearchClosed: searchResult.isSearchClosed,
    sessionToken: currentUser.SessionToken,
    newJobName: 'My New Job'
  };
};

export default connect(mapStateToProps)(PageWrapper);
