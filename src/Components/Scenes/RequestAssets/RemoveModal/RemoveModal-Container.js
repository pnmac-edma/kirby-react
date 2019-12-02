import React from 'react';
import { connect } from 'react-redux';
import { ListItem } from '@material-ui/core';
import RemoveModal from './RemoveModal';
import {
  handleModalOpen,
  handleModalClose
} from '../../../../Actions/requestAssetActions';

const mapStateToProps = ({ requestAssets }) => {
  return {
    modalText:
      'Are you sure that you want to remove the following assets from your request?',
    selectedSearchResultCopy: requestAssets.selectedSearchResultCopy,
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
    renderStyle: { textTransform: 'capitalize', fontWeight: 'bold' }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleModalOpen: val => dispatch(handleModalOpen(val)),
    handleModalClose: val => dispatch(handleModalClose(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveModal);
