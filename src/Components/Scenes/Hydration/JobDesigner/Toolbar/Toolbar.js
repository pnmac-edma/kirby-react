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
      <Typography variant="h5" style={{ textAlign: 'center' }}>
        Pick A Node, Any Node
      </Typography>
      {children}
    </div>
  );
};

export const Toolbar = props => {
  const { selectedNode, addNodeToDiagram } = props;
  if (selectedNode !== null) {
    const toolbarType = {
      source: 'Source',
      trans: 'Transformation',
      dest: 'Destination'
    }[selectedNode.type];
    return (
      <div className="toolbar">
        <Typography style={{ textAlign: 'center' }} variant="h5">
          Toolbar for {toolbarType}
        </Typography>
        <Typography style={{ textAlign: 'center' }}>
          Node ID:
          <br /> {selectedNode.id}
        </Typography>
      </div>
    );
  } else {
    return (
      <ToolbarWidget>
        <ToolbarItemWidget
          model={{ type: 'source' }}
          name="Source Node"
          color="#31AFDF"
          onClick={() => addNodeToDiagram('source', 400, 400)}
        />
        <ToolbarItemWidget
          model={{ type: 'trans' }}
          name="Transformation Node"
          color="#CA4ABE"
          onClick={() => addNodeToDiagram('trans', 400, 400)}
        />
        <ToolbarItemWidget
          model={{ type: 'dest' }}
          name="Destination Node"
          color="#EF736E"
          onClick={() => addNodeToDiagram('dest', 400, 400)}
        />
      </ToolbarWidget>
    );
  }
};
