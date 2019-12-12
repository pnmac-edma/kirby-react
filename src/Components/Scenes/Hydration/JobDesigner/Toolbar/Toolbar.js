import React from 'react';
import { Typography } from '@material-ui/core';
import DefaultToolbar from './DefaultToolbar';
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
        <Typography variant="h5">
          Toolbar for {toolbarType}
          <br /> Node ID:
          <br /> {selectedNode.id}
        </Typography>
      </div>
    );
  } else {
    return <DefaultToolbar addNodeToDiagram={addNodeToDiagram} />;
  }
};

export default Toolbar;
