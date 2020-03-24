import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { makeStyles, Drawer, List } from '@material-ui/core';
import PageWrapper from '../PageWrapper/PageWrapper-Container';
import color from '@edma/design-tokens/js/color';
import UserGroup from '../../SideNavigation/UserGroupListItem/UserGroupListItem';
import DashboardListItem from '../../SideNavigation/DashboardListItem/DashboardListItem';
import SearchAssetsListItem from '../../SideNavigation/SearchAssetsListItem/SearchAssetsListItem-Container';
import GovernanceListItem from '../../SideNavigation/GovernanceListItem/GovernanceListItem-Container';
import HydrationListItem from '../../SideNavigation/HydrationListItem/HydrationListItem-Container';
import RequestListItem from '../../SideNavigation/RequestListItem/RequestListItem-Container';
import KeysListItem from '../../SideNavigation/KeysListItem/KeysListItem';
import AwsAthenaListItem from '../../SideNavigation/AwsAthenaListItem/AwsAthenaListItem';
import AvatarListItem from '../../SideNavigation/AvatarListItem/AvatarListItem';
import ExpiredAuth from '../../../Presentational/ErrorSplashes/ExpiredAuth';
import BadRequest from '../../../Presentational/ErrorSplashes/BadRequest';
import { useQuery } from '../../../../Hooks/customHooks';
import config from '../../../../config/config';

const navWidth = 250;

const navStyle = makeStyles(theme => ({
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
    color: color.g400,
    backgroundColor: color.black,
    borderRight: 'none',
    width: navWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    transitionDelay: '200ms'
  },
  drawerClose: {
    overflow: 'hidden',
    color: color.g400,
    backgroundColor: color.black,
    borderRight: 'none',
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

const Navigation = props => {
  const { sessionToken, authenticateFetch } = props;
  const classes = navStyle();

  const [apiError, setApiError] = useState(null);
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
  const samlResponse = useQuery('SAMLResponse');
  const [isRedirecting, setIsRedirecting] = useState(true);
  useEffect(() => {
    if (samlResponse && !sessionToken) {
      setIsRedirecting(false);
      authenticateFetch(samlResponse);
    } else if (!sessionToken) {
      setIsRedirecting(true);
      window.location.replace(config.cognitoUrl);
    } else {
      setIsRedirecting(false);
    }
  }, [samlResponse, authenticateFetch, sessionToken]);

  const [open, setOpen] = useState(false);
  const closeDrawer = () => {
    setOpen(!open);
  };

  return !isRedirecting ? (
    <div className={classes.root}>
      {apiError === null && (
        <>
          <Drawer
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
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
              <UserGroup />
              <DashboardListItem closeDrawer={closeDrawer} />
              <SearchAssetsListItem />
              <GovernanceListItem
                closeAllArrows={open}
                closeDrawer={closeDrawer}
              />
              <HydrationListItem
                closeAllArrows={open}
                closeDrawer={closeDrawer}
              />
              <RequestListItem
                closeAllArrows={open}
                closeDrawer={closeDrawer}
              />
              <KeysListItem closeDrawer={closeDrawer} />
              <AwsAthenaListItem />
            </List>
            <AvatarListItem />
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
