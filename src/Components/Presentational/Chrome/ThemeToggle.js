import React from 'react';
import { ReactComponent as LightBulbLight } from '@edma/blocks/src/assets/img/lightbulb-outline.svg';
import { ReactComponent as LightBulbDark } from '@edma/blocks/src/assets/img/lightbulb.svg';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { IconButton, Tooltip } from '@material-ui/core';
import color from '@edma/design-tokens/js/color';

const themeToggle = makeStyles({
  themeToggleLogoDark: {
    fill: color.white
  },
  themeToggleLogoLight: {
    fill: color.black
  }
});

const ThemeToggle = () => {
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
          <IconButton>
            <LightBulbDark className={classes.themeToggleLogoLight} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip
          title="Toggle light/dark mode"
          enterDelay={500}
          leaveDelay={200}
        >
          <IconButton>
            <LightBulbLight className={classes.themeToggleLogoDark} />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default ThemeToggle;
