import React from 'react';
import {
  Button,
  Typography,
  TextField,
  MenuItem,
  IconButton,
  Tab,
  Tabs,
  Tooltip
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import PlayIcon from '@material-ui/icons/PlayArrow';
import color from '@edma/design-tokens/js/color';

const toolbarStyles = makeStyles(theme => ({
  toolbar: {
    background: theme.palette.type === 'light' ? color.white : color.black,
    borderLeftColor: theme.palette.type === 'light' ? color.g100 : color.g700
  },
  toolbarBottomBorder: {
    borderBottomColor: theme.palette.type === 'light' ? color.g100 : color.g700
  },
  toolbarTabs: {
    extends: 'toolbarTop'
  },
  typography: {
    textAlign: 'left',
    padding: '8px 16px 16px'
  },
  iconButton: {
    color: color.black
  },
  playButton: {
    color: color.black,
    background: color.y400,
    minWidth: 40,
    minHeight: 40
  },
  toolbarTopRight: {
    position: 'absolute',
    right: 12,
    top: 8
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
      className="Toolbar__nodetype"
      onClick={onClick}
    >
      {name}
    </div>
  );
};

const ToolbarWidget = props => {
  const classes = toolbarStyles();
  const { children } = props;
  const [tab, setTab] = React.useState(0);

  const handleTabsChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <div className={`${classes.toolbar} Toolbar`}>
      <div className={`${classes.toolbarBottomBorder} Toolbar__top`}>
        <Tooltip
          title="Undo"
          aria-label="Undo"
          enterDelay={500}
          leaveDelay={200}
        >
          <IconButton disabled aria-label="Undo" className={classes.iconButton}>
            <UndoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Redo"
          aria-label="Redo"
          enterDelay={500}
          leaveDelay={200}
        >
          <IconButton disabled aria-label="Redo" className={classes.iconButton}>
            <RedoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <span className={classes.toolbarTopRight}>
          <Tooltip
            title="Schedule Job"
            aria-label="Schedule Job"
            enterDelay={500}
            leaveDelay={200}
          >
            <Button disabled className={classes.playButton}>
              <PlayIcon aria-label="Schedule Job" fontSize="small" />
            </Button>
          </Tooltip>
        </span>
      </div>
      <div className={`${classes.toolbarBottomBorder} Toolbar__tabs`}>
        <Tabs
          value={tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleTabsChange}
          aria-label="Tile types"
        >
          <Tab label="Sources" className="Toolbar__sources-tab" />
          <Tab label="Transforms" className="Toolbar__transforms-tab" />
          <Tab label="Destinations" className="Toolbar__destinations-tab" />
        </Tabs>
      </div>
      {children}
    </div>
  );
};

const options = [
  {
    value: 'option_1',
    label: 'Option 1'
  },
  {
    value: 'option_2',
    label: 'Option 2'
  },
  {
    value: 'option_3',
    label: 'Option 3'
  },
  {
    value: 'option_4',
    label: 'Option 4'
  }
];

export const Toolbar = props => {
  const classes = toolbarStyles();
  const { selectedNode, addNodeToDiagram } = props;
  const [value, setValue] = React.useState('option_1');

  const handleSelectChange = e => {
    setValue(e.target.value);
  };

  if (selectedNode !== null) {
    const toolbarType = {
      source: 'Source',
      trans: 'Transformation',
      dest: 'Destination'
    }[selectedNode.type];
    return (
      <ToolbarWidget>
        <Typography className={classes.typography} variant="h5">
          Toolbar for {toolbarType}
          <br /> Node ID:
          <br /> {selectedNode.id}
        </Typography>
      </ToolbarWidget>
    );
  } else {
    return (
      <ToolbarWidget>
        <ToolbarItemWidget
          model={{ type: 'source' }}
          name="Source"
          color={color['c400']}
          onClick={() => addNodeToDiagram('source', 400, 400)}
        />
        <ToolbarItemWidget
          model={{ type: 'trans' }}
          name="Transformation"
          color={color['v400']}
          onClick={() => addNodeToDiagram('trans', 400, 400)}
        />
        <ToolbarItemWidget
          model={{ type: 'dest' }}
          name="Destination"
          color={color['t600']}
          onClick={() => addNodeToDiagram('dest', 400, 400)}
        />
        <div className={classes.typography}>
          <div>
            <TextField
              id="example"
              label="Example TextField"
              className="Toolbar__textfield"
            />
          </div>
          <div>
            <TextField
              select
              className="Toolbar__select"
              id="select-example"
              label="Example Select"
              value={value}
              onChange={handleSelectChange}
            >
              {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
      </ToolbarWidget>
    );
  }
};
