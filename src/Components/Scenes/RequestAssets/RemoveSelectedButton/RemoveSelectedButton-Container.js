import { connect } from 'react-redux';
import RemoveSelectedButton from './RemoveSelectedButton';

const mapStateToProps = () => {
  return {
    textField: `Remove Selected`
  };
};

export default connect(mapStateToProps)(RemoveSelectedButton);
