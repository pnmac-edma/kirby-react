import React, { useState } from 'react';
import { Box, Divider, List, ListItem, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ToolbarItemWidget from './ToolbarItemWidget';
import color from '@edma/design-tokens/js/color';

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

export const DefaultToolbarBody = props => {
  const { addNodeToDiagram } = props;
  const [selectedTab, setSelectedTab] = useState(0);

  const tabNames = ['Sources', 'Transforms', 'Destinations'];
  const selectedTabName = tabNames[selectedTab];

  const getNodeList = nodeType =>
    ({
      Sources: <SourcesList addNodeToDiagram={addNodeToDiagram} />,
      Transforms: <TransformsList addNodeToDiagram={addNodeToDiagram} />,
      Destinations: <DestinationsList addNodeToDiagram={addNodeToDiagram} />
    }[nodeType]);

  const tabStyles = makeStyles(theme => ({
    tabIndicator: {
      backgroundColor: 'transparent'
    },
    tabRoot: {
      '@media (min-width: 600px)': {
        minWidth: '100px'
      }
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
    <>
      <Divider />
      <Tabs
        classes={{ indicator: classes.tabIndicator }}
        value={selectedTab}
        onChange={(e, newTabValue) => setSelectedTab(newTabValue)}
        centered
      >
        <Tab
          label="Sources"
          classes={{ selected: classes.sourcesSelected, root: classes.tabRoot }}
        />
        <Tab
          label="Transforms"
          classes={{ selected: classes.transSelected, root: classes.tabRoot }}
        />
        <Tab
          label="Destinations"
          classes={{ selected: classes.destSelected, root: classes.tabRoot }}
        />
      </Tabs>
      <Divider />
      <Box>{getNodeList(selectedTabName)}</Box>
      <Divider />
    </>
  );
};

export default DefaultToolbarBody;
