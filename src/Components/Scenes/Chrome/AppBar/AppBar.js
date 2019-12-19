import React from 'react';
import ThemeToggle from '../../../Presentational/Chrome/ThemeToggle';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Breadcrumbs, Link, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import color from '@edma/design-tokens/js/color';
import { ReactComponent as KirbyLogo } from '../../../../assets/img/kirbyLogo.svg';
import { ReactComponent as KirbyMark } from '../../../../assets/img/kirbyMark.svg';

const appBarStyle = makeStyles(theme => ({
  logoContainer: {
    marginLeft: '16px',
    display: 'flex'
  },
  themeToggleContainer: {
    position: 'absolute',
    right: '8px'
  },
  logo: {
    height: '56px',

    '& path': {
      fill: theme.palette.type === 'light' ? color.black : color.white
    }
  },
  mark: {
    height: theme.spacing(7),
    flexShrink: 0,
    marginRight: theme.spacing(1.5),

    '& path': {
      fill: theme.palette.type === 'light' ? color.black : color.white
    }
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    height: 56,
    marginTop: 32,
    transition: 'margin .2s ease-in-out'
  },
  appBarHydration: {
    position: 'absolute',
    marginTop: 8,
    zIndex: 1,
    width: 'calc(100% - 260px)'
  },
  header: {
    marginLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    position: 'absolute'
  },
  breadcrumbs: {
    whiteSpace: 'nowrap',
    color: theme.palette.type === 'light' ? color.black : color.white,
    marginLeft: 24
  }
}));

const Appbar = props => {
  const classes = appBarStyle();
  const { jobName } = props;

  return (
    <AppBar
      position="relative"
      color="default"
      className={
        props.hydration
          ? `${classes.appBar} ${classes.appBarHydration}`
          : classes.appBar
      }
    >
      <div className={classes.logoContainer}>
        {props.hydration ? (
          <>
            <KirbyMark className={classes.mark} />
            <Box className={classes.header}>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<Typography variant="body1">/</Typography>}
                className={classes.breadcrumbs}
              >
                <Link href="/hydration/view-jobs" variant="body1">
                  Jobs
                </Link>
                <Typography variant="body1">{jobName}</Typography>
              </Breadcrumbs>
              <KeyboardArrowDownIcon />
            </Box>
          </>
        ) : (
          <KirbyLogo className={classes.logo} />
        )}
      </div>
      <div className={classes.themeToggleContainer}>
        <ThemeToggle />
      </div>
    </AppBar>
  );
};

export default Appbar;
