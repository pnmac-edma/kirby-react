import { connect } from 'react-redux';
import NewDestination from './NewDestination';

const mapStateToProps = state => {
  return {
    newDestinationName: 'My New Job'
  };
};

export default connect(mapStateToProps)(NewDestination);
