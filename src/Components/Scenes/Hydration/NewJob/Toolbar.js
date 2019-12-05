import React from 'react';
import { Typography } from '@material-ui/core';

export const ToolbarItemWidget = props => {
  const { model, color, name, onClick } = props;

  return (
    <div
      style={{ borderColor: color }}
      draggable={true}
      onDragStart={event => {
        event.dataTransfer.setData('storm-diagram-node', JSON.stringify(model));
      }}
      className="toolbar-item"
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export const ToolbarWidget = props => {
  const { children } = props;
  return (
    <div className="toolbar">
      <Typography style={{ textAlign: 'center' }}>Toolbar</Typography>
      {children}
    </div>
  );
};
