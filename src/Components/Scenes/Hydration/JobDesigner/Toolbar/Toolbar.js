import React from 'react';
import { Box, Typography } from '@material-ui/core';
import ToolbarHeader from './ToolbarHeader';
import DefaultToolbarBody from './DefaultToolbar';

export const Toolbar = props => {
  const { selectedNode, addNodeToDiagram } = props;
  let renderDefault = true;
  let toolbarType = '';

  if (selectedNode !== null) {
    toolbarType = {
      source: 'Source',
      trans: 'Transformation',
      dest: 'Destination'
    }[selectedNode.type];
    renderDefault = false;
  }
  return (
    <Box>
      <ToolbarHeader />
      {renderDefault ? (
        <DefaultToolbarBody addNodeToDiagram={addNodeToDiagram} />
      ) : (
        <Typography variant="h5">
          Toolbar for {toolbarType}
          <br /> Node ID:
          <br /> {selectedNode.id}
        </Typography>
      )}
    </Box>
  );
};

export default Toolbar;
