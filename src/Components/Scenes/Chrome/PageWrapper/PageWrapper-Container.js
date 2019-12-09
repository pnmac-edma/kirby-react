import { connect } from 'react-redux';
import PageWrapper from './PageWrapper';
import { authenticateFetch } from '../../../../State/AuthFlow/actions';

const mapStateToProps = ({ searchResult, currentUser }) => {
  return {
    isSearchClicked: searchResult.isSearchClicked,
    isSearchClosed: searchResult.isSearchClosed,
    sessionToken: currentUser.SessionToken,
    error: currentUser.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticateFetch: token => dispatch(authenticateFetch(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
