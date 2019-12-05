import { connect } from 'react-redux';
import MakeRequests from './MakeRequests';
import { makeRequestsFetch } from '../../../../Actions/requestAssetActions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    TextButton: 'Hello'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeRequestsFetch: () => dispatch(makeRequestsFetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeRequests);
