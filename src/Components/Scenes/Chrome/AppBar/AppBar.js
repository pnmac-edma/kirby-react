import React from 'react';
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
  }
}));

const Appbar = props => {
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
          <Link href="/">
            <KirbyMark className={classes.mark} />
          </Link>
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
