import React from 'react';
import { connect } from 'react-redux';
import { ListItem } from '@material-ui/core';
import weight from '@edma/design-tokens/js/weight';
import RemoveModal from '../../../Presentational/RequestAssets/RemoveModal';
import {
  handleModalToggle,
  handleRemoveSelected
} from '../../../../State/RequestAsset/actions';

const mapStateToProps = ({ requestAssets }) => {
  const { selectedSearchResultCopy, selected } = requestAssets;

  const removeItemList = selectedSearchResultCopy.reduce(
    (acc, { Id, name }) => {
      if (selected.some(id => id === Id)) {
        acc.push(
          <ListItem key={Id} style={{ display: 'list-item' }}>
            {name}
          </ListItem>
        );
      }
      return acc;
    },
    []
  );

  return {
    modalText:
      'Are you sure that you want to remove the following assets from your request?',
    render: removeItemList,
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
