import React from 'react';
import { ReactComponent as LightBulbLight } from '@edma/design-tokens/img/lightbulbOutlineIcon.svg';
import { ReactComponent as LightBulbDark } from '@edma/design-tokens/img/lightbulbIcon.svg';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { IconButton, Tooltip } from '@material-ui/core';
import color from '@edma/design-tokens/js/color';

const themeToggle = makeStyles({
  themeToggleLogoDark: {
    '& path': {
      fill: color.white
    }
  },
  themeToggleLogoLight: {
    '& path': {
      fill: color.black
    }
  }
});

const ThemeToggle = ({ themeToggle: themeToggleFunction }) => {
  const classes = themeToggle();
  const theme = useTheme();
  return (
    <>
      {theme.palette.type === 'light' ? (
        <Tooltip
          title="Toggle light/dark mode"
          enterDelay={500}
          leaveDelay={200}
        >
          <IconButton onClick={() => themeToggleFunction()}>
            <LightBulbDark className={classes.themeToggleLogoLight} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip
          title="Toggle light/dark mode"
          enterDelay={500}
          leaveDelay={200}
        >
          <IconButton onClick={() => themeToggleFunction()}>
            <LightBulbLight className={classes.themeToggleLogoDark} />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default ThemeToggle;
