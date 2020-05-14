import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import axios from 'axios';
import { makeStyles, Drawer, List } from '@material-ui/core';
import PageWrapper from '../PageWrapper/PageWrapper';
import color from '@edma/design-tokens/js/color';
import DashboardListItem from '../../SideNavigation/DashboardListItem/DashboardListItem';
import SearchAssetsListItem from '../../SideNavigation/SearchAssetsListItem/SearchAssetsListItem';
import GovernanceListItem from '../../SideNavigation/GovernanceListItem/GovernanceListItem';
import HydrationListItem from '../../SideNavigation/HydrationListItem/HydrationListItem';
import RequestListItem from '../../SideNavigation/RequestListItem/RequestListItem';
import AwsAthenaListItem from '../../SideNavigation/AwsAthenaListItem/AwsAthenaListItem';
import AvatarListItem from '../../SideNavigation/AvatarListItem/AvatarListItem';
import MenuToggleListItem from '../../SideNavigation/MenuToggleListItem/MenuToggleListItem';
import ExpiredAuth from '../../../Presentational/ErrorSplashes/ExpiredAuth';
import BadRequest from '../../../Presentational/ErrorSplashes/BadRequest';
import { useQuery } from '../../../../Hooks/customHooks';
import config from '../../../../config/config';
import { authenticateFetch } from '../../../../State/AuthFlow/actions';

const navWidth = 250;

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    height: '100vh'
  },
  drawer: {
    width: navWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    position: 'relative',
    overflow: 'hidden'
  },
  drawerOpen: {
    overflowY: 'auto',
    overflowX: 'hidden',
    borderRight: 'none',
    width: navWidth,
    backgroundColor: color.v700,
    background: `linear-gradient(0deg, ${color.b500} 0%, ${color.v700} 40%, ${color.v700} 100%)`,
    color: color.v100,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    overflow: 'hidden',
    borderRight: 'none',
    backgroundColor: color.v700,
    background: `linear-gradient(0deg, ${color.b500} 0%, ${color.v700} 40%, ${color.v700} 100%)`,
    color: color.v100,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7)
    }
  },
  customList: {
    marginBottom: 72
  }
}));

const Navigation = () => {
  const classes = useStyles();

  const [isRedirecting, setIsRedirecting] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [open, setOpen] = useState(false);

  const sessionToken = useSelector(
    ({ currentUser }: any) => currentUser.SessionToken
  );
  const dispatch = useDispatch();

  const samlResponse = useQuery('SAMLResponse');
  const closeDrawer = () => {
    setOpen(!open);
  };

  const openDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    axios.interceptors.response.use(
      response => {
        console.log('good response');
        setApiError(null);
        return response;
      },
      error => {
        console.log('bad response');
        setApiError(error.response.status);
        return Promise.reject(error);
      }
    );
  });

  // Case 1: there is a SAML response but no session token, so authenticate real quick
  // Case 2: there is neither a SAML response nor a session token, so redirect to OneLogin
  // Case 3: there may or may not be a SAML response,
  //         but there is a session token, so relax until an hour later
  //         when we get a 4xx code from some request, then redirect
  useEffect(() => {
    if (samlResponse && !sessionToken) {
      setIsRedirecting(false);
      dispatch(authenticateFetch(samlResponse));
    } else if (!sessionToken) {
      setIsRedirecting(true);
      window.location.replace(config.cognitoUrl);
    } else {
      setIsRedirecting(false);
    }
  }, [samlResponse, dispatch, sessionToken]);

  return !isRedirecting ? (
    <div className={classes.root}>
      {apiError === null && (
        <>
          <Drawer
            variant="permanent"
            className={clsx('Nav', classes.drawer, {
              'Nav--is-open': open,
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })}
            classes={{
              paper: clsx({
                'Nav--is-open': open,
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
              })
            }}
            open={open}
          >
            <List className={classes.customList}>
              <MenuToggleListItem
                closeAllArrows={open}
                toggleDrawer={closeDrawer}
              />
              <DashboardListItem
                closeAllArrows={open}
                closeDrawer={closeDrawer}
              />
              <SearchAssetsListItem closeAllArrows={open} />
              <GovernanceListItem
                closeAllArrows={open}
                openDrawer={openDrawer}
              />
              <HydrationListItem
                closeAllArrows={open}
                openDrawer={openDrawer}
              />
              <RequestListItem closeAllArrows={open} openDrawer={openDrawer} />
              <AwsAthenaListItem closeAllArrows={open} />
            </List>
            <AvatarListItem closeAllArrows={open} closeDrawer={closeDrawer} />
          </Drawer>
          <main>
            <PageWrapper />
          </main>
        </>
      )}
      {apiError === 400 && <BadRequest />}
      {(apiError === 401 || apiError === 403) && <ExpiredAuth />}
    </div>
  ) : null;
};

export default Navigation;
