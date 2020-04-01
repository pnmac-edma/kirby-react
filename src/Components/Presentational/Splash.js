import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import color from '@edma/design-tokens/js/color';
import DashboardLight from '../../assets/img/dashboardGraphicLight.svg';
import DashboardDark from '../../assets/img/dashboardGraphicDark.svg';

// Define custom component styles
const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center'
  },
  graphic: {
    maxWidth: '100%',
    marginTop: '32px'
  },
  heading: {
    color: theme.palette.type === 'light' ? color.g700 : color.g200,
    marginTop: 24,
    display: 'inline-block',

    '&:after': {
      display: 'none'
    }
  },
  paragraph: {
    margin: '16px auto',
    color: theme.palette.type === 'light' ? color.g600 : color.g400,
    maxWidth: 270
  }
}));

export default function Splash() {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    document
      .querySelector('#root')
      .classList.add(theme.palette.type === 'light' ? 'splash' : 'splash-dark');
    return () => {
      document
        .querySelector('#root')
        .classList.remove(
          theme.palette.type === 'light' ? 'splash' : 'splash-dark'
        );
    };
  });

  return (
    <Box className={classes.container}>
      {theme.palette.type === 'light' ? (
        <div>
          <img
            src={DashboardLight}
            className={classes.graphic}
            alt="Dashboard Light"
          />
        </div>
      ) : (
        <div>
          <img
            src={DashboardDark}
            className={classes.graphic}
            alt="Dashboard Dark"
          />
        </div>
      )}

      <Typography variant="h1" className={classes.heading}>
        Welcome To Kirby
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        Use the menu on the left to find data in the PennyMac lake, build ETLs,
        and get swol!
      </Typography>
    </Box>
  );
}
