import React from 'react';

const ToolbarItemWidget = props => {
  const { model, color, name, onClick } = props;

  return (
    <div
      style={{ borderColor: color }}
      draggable={true}
      onDragStart={event => {
        event.dataTransfer.setData('storm-diagram-node', JSON.stringify(model));
      }}
      className="Toolbar__nodetype"
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default ToolbarItemWidget;
