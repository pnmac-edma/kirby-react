import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import color from '@edma/design-tokens/js/color';

const ToolbarHeader = props => {
  return (
    <Box
      style={{
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box>
        <UndoIcon style={{ marginRight: '10px' }} />
        <RedoIcon />
      </Box>
      <PlayArrowIcon />
    </Box>
  );
};

export default ToolbarHeader;
