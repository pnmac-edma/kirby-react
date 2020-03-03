import { connect } from 'react-redux';
import Navigation from './Navigation';
import { authenticateFetch } from '../../../../State/AuthFlow/actions';

const mapStateToProps = ({ currentUser }) => {
  return {
    sessionToken: currentUser.SessionToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticateFetch: token => dispatch(authenticateFetch(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
