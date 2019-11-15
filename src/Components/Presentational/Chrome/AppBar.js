import React from 'react';
import ThemeToggle from './ThemeToggle';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SearchBar from './SearchBar';
import color from '@edma/design-tokens/js/color';
import { ReactComponent as KirbyLogo } from '../../../assets/img/kirbyLogo.svg';

const appBarStyle = makeStyles(theme => ({
  logoContainer: {
    marginLeft: '16px',
    display: 'flex'
  },
  searchBarContainer: {
    position: 'absolute',
    right: '104px',
    top: '-2px'
  },
  themeToggleContainer: {
    position: 'absolute',
    right: '72px'
  },
  Logo: {
    height: '56px',

    '& path': {
      fill: theme.palette.type === 'light' ? color.black : color.white
    }
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    height: 56,
    marginTop: 32
  }
}));

const Appbar = () => {
  const classes = appBarStyle();

  return (
    <AppBar position="relative" color="default" className={classes.appBar}>
      <div className={classes.logoContainer}>
        <KirbyLogo className={classes.Logo} />
      </div>
      <div className={classes.searchBarContainer}>
        <SearchBar />
      </div>
      <div className={classes.themeToggleContainer}>
        <ThemeToggle />
      </div>
    </AppBar>
  );
};

export default Appbar;
