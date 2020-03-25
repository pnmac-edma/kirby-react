import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import { IconButton, Tab, Tabs, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import PlayIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PublishIcon from '@material-ui/icons/Publish';
import color from '@edma/design-tokens/js/color';
import { InitialStateTypes } from '../../../../../State/Hydration/types';

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
    color: theme.palette.type === 'light' ? color.black : color.white
  }
}));

interface ToolbarWidgetProps {
  setTab: (num: number) => void;
  tab: number;
  handleTabsChange: (_: any, newTab: number) => void;
  setIsScheduleJobOpen: (value: boolean) => void;
  children: React.ReactNode;
}

const ToolbarWidget = ({
  setTab,
  tab,
  handleTabsChange,
  setIsScheduleJobOpen,
  children
}: ToolbarWidgetProps) => {
  const classes = useStyles();
  const [isJobRunning, setIsJobRunning] = useState(false);
  const { values } = useFormikContext() as { values: InitialStateTypes };
  const { sources } = values;

  const isNonKirbySourceAdded = Boolean(
    Object.values(sources).find(source =>
      ['RDBMS', 'SFTP', 'API'].includes(source.sourceType)
    )
  );

  useEffect(() => {
    if (isNonKirbySourceAdded) {
      setTab(2);
    }
  }, [isNonKirbySourceAdded, setTab]);

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
        <Tooltip
          title={isJobRunning ? 'Stop Test Run' : 'Test Run Job'}
          aria-label={isJobRunning ? 'Stop Test Run' : 'Test Run Job'}
          enterDelay={500}
          leaveDelay={200}
        >
          <span>
            <IconButton
              className={classes.iconButton}
              onClick={() => setIsJobRunning(!isJobRunning)}
            >
              {isJobRunning ? (
                <StopIcon aria-label="Stop Test Run" fontSize="small" />
              ) : (
                <PlayIcon aria-label="Test Run Job" fontSize="small" />
              )}
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip
          title="Schedule Job"
          aria-label="Schedule Job"
          enterDelay={500}
          leaveDelay={200}
        >
          <span>
            <IconButton
              onClick={() => setIsScheduleJobOpen(true)}
              className={classes.iconButton}
            >
              <ScheduleIcon aria-label="Schedule Job" fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip
          title="Submit For Review"
          aria-label="Submit For Review"
          enterDelay={500}
          leaveDelay={200}
        >
          <span>
            <IconButton disabled className={classes.iconButton}>
              <PublishIcon aria-label="Submit For Review" fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
      </div>
      <div className={`${classes.toolbarBottomBorder} Toolbar__tabs`}>
        <Tabs
          value={tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleTabsChange}
          aria-label="Tile types"
        >
          <Tab
            disabled={isNonKirbySourceAdded}
            label="Sources"
            className="Toolbar__sources-tab"
          />
          <Tab
            disabled={isNonKirbySourceAdded}
            label="Transforms"
            className="Toolbar__transforms-tab"
          />
          <Tab label="Destinations" className="Toolbar__destinations-tab" />
        </Tabs>
      </div>
      {children}
    </div>
  );
};

export default ToolbarWidget;
