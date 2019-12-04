import React from 'react';
import { Button } from '@material-ui/core';

const RemoveSelectedButton = props => {
  const { textField, selectedSearchResultCopy, handleModalToggle } = props;
  return (
    <Button
      color="primary"
      variant="contained"
      disabled={selectedSearchResultCopy <= 0}
      onClick={() => handleModalToggle()}
    >
      {textField}
    </Button>
  );
};

export default RemoveSelectedButton;
