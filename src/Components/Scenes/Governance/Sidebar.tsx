import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import { color, fontSize, font } from '@edma/design-tokens';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  sidebar: {
    background: theme.palette.type === 'light' ? color.g100 : color.g800,
    fontSize: fontSize[1],
    marginTop: '-10rem',
    marginBottom: '-10rem',
    overflow: 'hidden',
    paddingTop: '10rem',
    maxWidth: 430,
    minWidth: 300,
    width: '100%'
  },
  sideBarPostion: {
    margin: '0 1rem',
    color: theme.palette.type === 'light' ? color.black : color.white
  },
  dividerStyle: {
    width: '100%',
    marginBottom: 32,
    marginTop: 24
  },
  heading: {
    margin: '1rem 0 2rem',
    color: theme.palette.type === 'light' ? color.black : color.white
  },
  menuStyle: {
    width: 'max-content',
    marginBottom: 8,
    fontFamily: font.body,
    color: theme.palette.type === 'light' ? color.black : color.g300,
    margin: '1rem 0 2rem'
  }
}));

const Sidebar = (props: any) => {
  const classes = useStyles();

  return (
    <>
      <div style={{ margin: '0 1rem' }}>
        <Typography variant="subtitle2" className={classes.menuStyle}>
          Business Owners
        </Typography>
      </div>
      <Divider className={classes.dividerStyle} />
      <div style={{ margin: '0 1rem' }}>
        <Typography variant="subtitle2" className={classes.menuStyle}>
          Govenors
        </Typography>
      </div>
      <Divider className={classes.dividerStyle} />
      <div style={{ margin: '0 1rem' }}>
        <Typography variant="subtitle2" className={classes.menuStyle}>
          Sensitivity Levels
        </Typography>
      </div>
    </>
  );
};

export default Sidebar;
