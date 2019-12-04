import { connect } from 'react-redux';
import NewJob from './NewJob';

const mapStateToProps = state => {
  return {
    newJobName: 'My New Job'
  };
};

export default connect(mapStateToProps)(NewJob);
