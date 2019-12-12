import React from 'react';
import { Box } from '@material-ui/core';

const ToolbarItemWidget = props => {
  const { model, color, name, onClick } = props;

  return (
    <Box
      style={{ display: 'flex', alignItems: 'center' }}
      draggable={true}
      onDragStart={event => {
        event.dataTransfer.setData('storm-diagram-node', JSON.stringify(model));
      }}
      onClick={onClick}
    >
      <div
        style={{ borderColor: color, height: '20px', width: '30px' }}
        className="toolbar-item"
      ></div>
      {name}
    </Box>
  );
};

export default ToolbarItemWidget;
