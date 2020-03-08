import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ToolbarWidget from './ToolbarWidget';
import Destinations from '../Destinations/Destinations';
import Sources from '../Sources/Sources';
import Source from '../Source/Source';
import Transforms from '../Transforms/Transforms';
import Transform from '../Transform/Transform';

const useStyles = makeStyles(theme => ({
  typography: {
    textAlign: 'left',
    padding: '8px 16px 16px'
  }
}));

export const Toolbar = props => {
  const classes = useStyles();
  const { selectedNode, addNodeToDiagram } = props;
  const [tab, setTab] = React.useState(0);

  const handleTabsChange = (event, newTab) => {
    setTab(newTab);
  };

  if (selectedNode) {
    return (
      <ToolbarWidget tab={tab} handleTabsChange={handleTabsChange}>
        {selectedNode.type === 'source' && (
          <Source id={selectedNode.id} sourceType={selectedNode.name} />
        )}
        {selectedNode.type === 'transform' && (
          <Transform id={selectedNode.id} />
        )}
        {selectedNode.type === 'destination' && (
          <Typography className={classes.typography} variant="h5">
            Toolbar for {selectedNode.type}
            <br /> Node ID:
            <br /> {selectedNode.id}
          </Typography>
        )}
      </ToolbarWidget>
    );
  }

  return (
    <ToolbarWidget tab={tab} handleTabsChange={handleTabsChange}>
      {tab === 0 && <Sources addNodeToDiagram={addNodeToDiagram} />}
      {tab === 1 && <Transforms addNodeToDiagram={addNodeToDiagram} />}
      {tab === 2 && <Destinations addNodeToDiagram={addNodeToDiagram} />}
    </ToolbarWidget>
  );
};
