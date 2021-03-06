import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { history } from '../../../../BrowserRouter';
import ThemeToggle from '../../../Presentational/Chrome/ThemeToggle';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  Breadcrumbs,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  TextField,
  Typography
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { color, z } from '@edma/design-tokens';
import { ReactComponent as KirbyLogo } from '../../../../assets/img/kirbyLogoColor.svg';
import { ReactComponent as KirbyMark } from '../../../../assets/img/kirbyMarkColor.svg';
import {
  setJobName,
  setDefaultJobNameOnBlur
} from '../../../../State/Chrome/actions';
import { setIsUploadModalOpen } from '../../../../State/Hydration/actions';

const useStyles = makeStyles(theme => ({
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
    cursor: 'pointer'
  },
  mark: {
    height: theme.spacing(7),
    flexShrink: 0,
    cursor: 'pointer'
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
    verticalAlign: 'top',
    position: 'relative',
    top: 0,
    height: '20px',

    '&:hover': {
      background: theme.palette.type === 'light' ? color.g100 : color.g700
    },

    '& ~ svg ': {
      position: 'absolute',
      height: '0.8em',
      top: 19
    }
  },
  untitledJobName: {
    background: theme.palette.type === 'light' ? color.y100 : color.y300,
    color: color.black,

    '&:hover': {
      background: theme.palette.type === 'light' ? color.y100 : color.y300
    }
  },
  jobsLink: {
    color: theme.palette.type === 'light' ? color.b600 : color.b200,
    cursor: 'pointer'
  },
  jobsMenu: {
    top: '0.3rem',
    position: 'absolute',
    marginLeft: '0.5rem',

    '& .MuiSelect-select': {
      padding: 4,
      width: 16,
      height: 14
    },

    '&:before, &:after': {
      display: 'none'
    }
  },
  menuPadding: {
    padding: '0 16px',
    marginBottom: 8,
    color: theme.palette.type === 'light' ? color.g400 : color.g500
  },
  deleteItem: {
    color: theme.palette.type === 'light' ? color.r500 : color.r300
  },
  divider: {
    marginTop: 8
  }
}));

const Appbar = ({ hydration, home, hydrationFormikRef }: AppbarProps) => {
  const classes = useStyles();

  const [isJobNameActive, setIsJobNameActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const jobName = useSelector(({ chrome }: any) => chrome.jobName);
  const dispatch = useDispatch();

  const curPath = useLocation().pathname;

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRename = () => {
    handleClose();
    setIsJobNameActive(!isJobNameActive);
  };

  const handleOpen = () => {
    handleClose();
    history.push('/hydration/view-jobs');
  };

  const handleLogo = () => {
    history.push('/');
  };

  const LogoComponent =
    curPath === '/' ? (
      <KirbyLogo className={classes.logo} />
    ) : (
      <KirbyLogo className={classes.logo} onClick={handleLogo} />
    );
  const lastSaved = 14;

  return (
    <AppBar
      position="relative"
      color="default"
      className={
        hydration
          ? `${classes.appBar} ${classes.appBarHydration}`
          : home
          ? `${classes.appBar} ${classes.appBarHome}`
          : classes.appBar
      }
    >
      <div className={classes.logoContainer}>
        {hydration ? (
          <>
            <KirbyMark className={classes.mark} onClick={handleLogo} />
            <Box className={classes.header}>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<Typography variant="body1">/</Typography>}
                className={classes.breadcrumbs}
              >
                <Link
                  onClick={handleOpen}
                  variant="body1"
                  className={classes.jobsLink}
                >
                  Jobs
                </Link>
                {isJobNameActive ? (
                  <TextField
                    autoFocus
                    id="jobName"
                    className={classes.jobName}
                    onBlur={() => {
                      // this will call the handleSubmit function
                      // within Formik outside that context
                      if (hydrationFormikRef.current) {
                        hydrationFormikRef.current.handleSubmit();
                      }
                      dispatch(setDefaultJobNameOnBlur(jobName));
                      setIsJobNameActive(!isJobNameActive);
                    }}
                    onChange={e => dispatch(setJobName(e.target.value))}
                    placeholder={jobName}
                  />
                ) : (
                  <span>
                    <span
                      className={`${classes.jobNameBtn} ${
                        jobName === 'Untitled' ? classes.untitledJobName : ''
                      }`}
                      onClick={() => setIsJobNameActive(!isJobNameActive)}
                    >
                      {jobName === undefined ? 'untitled' : jobName}
                    </span>
                    <IconButton
                      id="job-select"
                      className={classes.jobsMenu}
                      aria-controls="jobs-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <KeyboardArrowDownIcon />
                    </IconButton>
                    <Menu
                      id="jobs-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>New</MenuItem>
                      <MenuItem onClick={handleOpen}>Open</MenuItem>
                      <MenuItem onClick={handleRename}>Rename</MenuItem>
                      <MenuItem onClick={handleClose}>Duplicate</MenuItem>
                      <MenuItem
                        onClick={() => {
                          dispatch(setIsUploadModalOpen(true));
                          handleClose();
                        }}
                      >
                        Upload Script
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        className={classes.deleteItem}
                      >
                        Delete
                      </MenuItem>
                      <Divider className={classes.divider} />
                      <p className={classes.menuPadding}>
                        Last saved {lastSaved} minutes ago
                      </p>
                    </Menu>
                  </span>
                )}
              </Breadcrumbs>
            </Box>
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

interface AppbarProps {
  hydration?: boolean;
  home?: boolean;
  hydrationFormikRef?: any;
}
