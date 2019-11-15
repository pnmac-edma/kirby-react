import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import color from '@edma/design-tokens/js/color';
import DashboardLight from '../../assets/img/dashboardGraphicLight.svg';
import DashboardDark from '../../assets/img/dashboardGraphicDark.svg';

// Define custom component styles
const useStyles = makeStyles(theme => ({
  graphic: {
    maxWidth: '100%',
    marginTop: '32px'
  },
  heading: {
    color: theme.palette.type === 'light' ? color.g500 : color.g200,
    marginTop: 24
  },
  paragraph: {
    margin: '16px auto',
    color: theme.palette.type === 'light' ? color.g400 : color.g300,
    maxWidth: 270
  }
}));

export default function Splash() {
  const classes = useStyles();
  const theme = useTheme();

  theme.palette.type === 'light'
    ? (document.body.style.backgroundColor = color.t200)
    : (document.body.style.backgroundColor = color.g700);

  return (
    <>
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

      <Typography variant="h6" className={classes.heading}>
        Welcome To Kirby
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        Use the menu on the left to find data in the PennyMac lake, build ETLs,
        and get swol!
      </Typography>
    </>
  );
}
