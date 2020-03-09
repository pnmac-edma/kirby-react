import React from 'react';
import { Button, IconButton, Tab, Tabs, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import PlayIcon from '@material-ui/icons/PlayArrow';
import color from '@edma/design-tokens/js/color';

const useStyles = makeStyles(theme => ({
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

const ToolbarWidget = props => {
  const classes = useStyles();
  const { children, tab, handleTabsChange } = props;

  return (
    <div className={`${classes.toolbar} Toolbar`}>
      <div className={`${classes.toolbarBottomBorder} Toolbar__top`}>
        <Tooltip
          title="Undo"
          aria-label="Undo"
          enterDelay={500}
          leaveDelay={200}
        >
          <span>
            <IconButton
              disabled
              aria-label="Undo"
              className={classes.iconButton}
            >
              <UndoIcon fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip
          title="Redo"
          aria-label="Redo"
          enterDelay={500}
          leaveDelay={200}
        >
          <span>
            <IconButton
              disabled
              aria-label="Redo"
              className={classes.iconButton}
            >
              <RedoIcon fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
        <span className={classes.toolbarTopRight}>
          <Tooltip
            title="Schedule Job"
            aria-label="Schedule Job"
            enterDelay={500}
            leaveDelay={200}
          >
            <span>
              <Button disabled className={classes.playButton}>
                <PlayIcon aria-label="Schedule Job" fontSize="small" />
              </Button>
            </span>
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

export default ToolbarWidget;
