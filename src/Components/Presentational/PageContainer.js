import React from 'react';
import AppBar from './Chrome/AppBar';
import Splash from './Splash';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';

const pageContainerStyle = makeStyles(theme => ({
  pageContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.type === 'light' ? 'dark' : 'light',
    width: '100%',
    height: '100vh',
    color: color.white
  }
}));

const PageContainer = () => {
  const classes = pageContainerStyle();
  return (
    <div className={classes.pageContainer}>
      <AppBar />
      <Splash />
    </div>
  );
};

export default PageContainer;
