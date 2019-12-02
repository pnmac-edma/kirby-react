import React from 'react';
import { Button } from '@material-ui/core';

const RemoveSelectedButton = props => {
  const { textField, selectedSearchResultCopy, handleModalOpen } = props;
  return (
    <Button
      color="primary"
      variant="contained"
      disabled={selectedSearchResultCopy <= 0}
      onClick={() => handleModalOpen()}
    >
      {textField}
    </Button>
  );
};

export default RemoveSelectedButton;
