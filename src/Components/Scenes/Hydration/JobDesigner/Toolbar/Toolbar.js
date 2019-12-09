import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';

const toolbarStyles = makeStyles(theme => ({
  typography: {
    textAlign: 'center'
  }
}));

const ToolbarItemWidget = props => {
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

const ToolbarWidget = props => {
  const classes = toolbarStyles();
  const { children } = props;
  return (
    <div className="toolbar">
      <Typography variant="h5" className={classes.typography}>
        Pick A Node, Any Node
      </Typography>
      {children}
    </div>
  );
};

export const Toolbar = props => {
  const classes = toolbarStyles();
  const { selectedNode, addNodeToDiagram } = props;
  if (selectedNode !== null) {
    const toolbarType = {
      source: 'Source',
      trans: 'Transformation',
      dest: 'Destination'
    }[selectedNode.type];
    return (
      <div className="toolbar">
        <Typography className={classes.typography} variant="h5">
          Toolbar for {toolbarType}
          <br /> Node ID:
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
          color={color['c400']}
          onClick={() => addNodeToDiagram('source', 400, 400)}
        />
        <ToolbarItemWidget
          model={{ type: 'trans' }}
          name="Transformation Node"
          color={color['v400']}
          onClick={() => addNodeToDiagram('trans', 400, 400)}
        />
        <ToolbarItemWidget
          model={{ type: 'dest' }}
          name="Destination Node"
          color={color['r300']}
          onClick={() => addNodeToDiagram('dest', 400, 400)}
        />
      </ToolbarWidget>
    );
  }
};
