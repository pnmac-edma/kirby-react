import React from 'react';
import ThemeToggle from '../../../Presentational/Chrome/ThemeToggle';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Breadcrumbs, Link, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useLocation } from 'react-router-dom';
import color from '@edma/design-tokens/js/color';
import { ReactComponent as KirbyLogo } from '../../../../assets/img/kirbyLogo.svg';
import { ReactComponent as KirbyMark } from '../../../../assets/img/kirbyMark.svg';

const appBarStyle = makeStyles(theme => ({
  logoContainer: {
    marginLeft: '16px',
    marginTop: '-4px',
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

    '& path': {
      fill: theme.palette.type === 'light' ? color.black : color.white
    }
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    height: 56,
    marginTop: 8,
    transition: 'margin .2s ease-in-out'
  },
  appBarHome: {
    marginTop: 32
  },
  appBarHydration: {
    position: 'absolute',
    zIndex: 1,
    width: 'calc(100% - 260px)'
  },
  header: {
    marginLeft: '32px',
    marginTop: '-2px',
    display: 'flex',
    alignItems: 'center',
    padding: '16px 0',
    position: 'absolute'
  },
  breadcrumbs: {
    whiteSpace: 'nowrap',
    color: theme.palette.type === 'light' ? color.black : color.white,
    marginLeft: 16
  }
}));

const Appbar = props => {
  const classes = appBarStyle();
  const curPath = useLocation().pathname;
  const { jobName, themeToggle } = props;

  const LogoComponent =
    curPath === '/' ? (
      <KirbyLogo className={classes.logo} />
    ) : (
      <Link href="/">
        <KirbyLogo className={classes.logo} />
      </Link>
    );

  return (
    <AppBar
      position="relative"
      color="default"
      className={
        props.hydration
          ? `${classes.appBar} ${classes.appBarHydration}`
          : props.home
          ? `${classes.appBar} ${classes.appBarHome}`
          : classes.appBar
      }
    >
      <div className={classes.logoContainer}>
        {props.hydration ? (
          <>
            <Link href="/">
              <KirbyMark className={classes.mark} />
            </Link>
            <Box className={classes.header}>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<Typography variant="body1">/</Typography>}
                className={classes.breadcrumbs}
              >
                <Link
                  href="/hydration/view-jobs"
                  to="/hydration/view-jobs"
                  variant="body1"
                >
                  Jobs
                </Link>
                <Typography variant="body1">{jobName}</Typography>
              </Breadcrumbs>
              <KeyboardArrowDownIcon />
            </Box>
          </>
        ) : (
          LogoComponent
        )}
      </div>
      <div className={classes.themeToggleContainer}>
        <ThemeToggle themeToggle={themeToggle} />
      </div>
    </AppBar>
  );
};

export default Appbar;
