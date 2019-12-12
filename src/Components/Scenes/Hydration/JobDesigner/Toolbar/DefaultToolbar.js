import React, { useState } from 'react';
import { Box, Divider, List, ListItem, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import color from '@edma/design-tokens/js/color';

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

const SourcesList = props => {
  const { addNodeToDiagram } = props;
  return (
    <List>
      <ListItem>
        <ToolbarItemWidget
          model={{ type: 'source' }}
          name="Source Node"
          color={color['c400']}
          onClick={() => addNodeToDiagram('source', 400, 400)}
        />
      </ListItem>
    </List>
  );
};

const TransformsList = props => {
  const { addNodeToDiagram } = props;
  return (
    <List>
      <ListItem>
        <ToolbarItemWidget
          model={{ type: 'trans' }}
          name="Transformation Node"
          color={color['v400']}
          onClick={() => addNodeToDiagram('trans', 400, 400)}
        />
      </ListItem>
    </List>
  );
};

const DestinationsList = props => {
  const { addNodeToDiagram } = props;
  return (
    <List>
      <ListItem>
        <ToolbarItemWidget
          model={{ type: 'dest' }}
          name="Destination Node"
          color={color['t800']}
          onClick={() => addNodeToDiagram('dest', 400, 400)}
        />
      </ListItem>
    </List>
  );
};

export const DefaultToolbar = props => {
  const { addNodeToDiagram } = props;
  const [selectedTab, setSelectedTab] = useState(0);

  const tabNames = ['Sources', 'Transforms', 'Destinations'];
  const componentMap = {
    Sources: <SourcesList addNodeToDiagram={addNodeToDiagram} />,
    Transforms: <TransformsList addNodeToDiagram={addNodeToDiagram} />,
    Destinations: <DestinationsList addNodeToDiagram={addNodeToDiagram} />
  };

  const renderToolbarBody = () => {
    const selectedTabName = tabNames[selectedTab];
    return <Box>{componentMap[selectedTabName]}</Box>;
  };

  const tabStyles = makeStyles(theme => ({
    tabIndicator: {
      backgroundColor: 'transparent'
    },
    sourcesSelected: {
      color: color['c400']
    },
    transSelected: {
      color: color['v400']
    },
    destSelected: {
      color: color['t800']
    }
  }));
  const classes = tabStyles();
  return (
    <Box>
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
      <Divider />
      <Tabs
        classes={{ indicator: classes.tabIndicator }}
        value={selectedTab}
        onChange={(e, newTabValue) => setSelectedTab(newTabValue)}
        indicatorColor="primary"
        centered
      >
        <Tab label="Sources" classes={{ selected: classes.sourcesSelected }} />
        <Tab label="Transforms" classes={{ selected: classes.transSelected }} />
        <Tab
          label="Destinations"
          classes={{ selected: classes.destSelected }}
        />
      </Tabs>
      <Divider />
      {renderToolbarBody()}
      <Divider />
    </Box>
  );
};

export default DefaultToolbar;
