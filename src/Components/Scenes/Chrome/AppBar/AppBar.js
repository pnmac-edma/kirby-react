import React from 'react';
import { useSelector } from 'react-redux';
import ThemeToggle from '../../../Presentational/Chrome/ThemeToggle';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Link } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { color, z } from '@edma/design-tokens';
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
    zIndex: z['1'],
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
  },
  jobName: {
    margin: 0,
    padding: 0,
    verticalAlign: 'top',
    display: 'block',

    '& .MuiInput-root:before, & .MuiInput-root:after': {
      display: 'none'
    },

    '& .MuiInput-input': {
      padding: 0
    }
  },
  jobNameBtn: {
    transition: 'all .2s ease-in-out',
    verticalAlign: 'top',
    position: 'relative',
    top: 0,
    height: '20px',

    '&:hover': {
      background: theme.palette.type === 'light' ? color.y50 : color.g600
    },

    '& ~ svg ': {
      position: 'absolute',
      height: '0.8em',
      top: 19
    }
  },
  untitledJobName: {
    background: theme.palette.type === 'light' ? color.y50 : color.g600
  },
  jobsLink: {
    color: theme.palette.type === 'light' ? color.b600 : color.b200
  }
}));

const Appbar = props => {
  const jobTitle = useSelector(({ hydration }) => hydration.jobTitle);
  const classes = appBarStyle();
  const curPath = useLocation().pathname;

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
          </>
        ) : (
          LogoComponent
        )}
      </div>
      <div className={classes.themeToggleContainer}>
        <ThemeToggle />
      </div>
    </AppBar>
  );
};

export default Appbar;
