import React from 'react';
import { Button } from '@material-ui/core';

const RemoveSelectedButton = props => {
  const { textField, count } = props;
  return (
    <Button color="primary" variant="contained" disabled={count <= 0}>
      {textField}
    </Button>
  );
};

export default RemoveSelectedButton;
