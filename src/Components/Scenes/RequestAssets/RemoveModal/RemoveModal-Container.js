import React from 'react';
import { connect } from 'react-redux';
import { ListItem } from '@material-ui/core';
import weight from '@edma/design-tokens/js/weight';
import RemoveModal from '../../../Presentational/RequestAssets/RemoveModal';
import {
  handleModalToggle,
  handleRemoveSelected
} from '../../../../Actions/requestAssetActions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    modalText:
      'Are you sure that you want to remove the following assets from your request?',
    render: requestAssets.selectedSearchResultCopy
      .filter(value => value.chec)
      .reduce((acc, value) => {
        acc.push(
          <ListItem key={value.Id} style={{ display: 'list-item' }}>
            {value.name}
          </ListItem>
        );
        return acc;
      }, []),
    openModal: requestAssets.openModal,
    modalTitle: `Removing Assets`,
    renderStyle: { textTransform: 'capitalize', fontWeight: weight['bold'] }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleModalToggle: () => dispatch(handleModalToggle()),
    handleRemoveSelected: () => dispatch(handleRemoveSelected())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveModal);
