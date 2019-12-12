import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { makeStyles, Drawer, List } from '@material-ui/core';
import PageWrapper from '../../Scenes/Chrome/PageWrapper/PageWrapper-Container';
import color from '@edma/design-tokens/js/color';
import UserGroup from '../../Scenes/SideNavigation/UserGroupListItem/UserGroupListItem';
import DashboardListItem from '../../Scenes/SideNavigation/DashboardListItem/DashboardListItem';
import SearchAssetsListItem from '../../Scenes/SideNavigation/SearchAssetsListItem/SearchAssetsListItem-Container';
import GovernanceListItem from '../../Scenes/SideNavigation/GovernanceListItem/GovernanceListItem-Container';
import HydrationListItem from '../../Scenes/SideNavigation/HydrationListItem/HydrationListItem-Container';
import RequestListItem from '../../Scenes/SideNavigation/RequestListItem/RequestListItem-Container';
import KeysListItem from '../../Scenes/SideNavigation/KeysListItem/KeysListItem';
import AwsAthenaListItem from '../../Scenes/SideNavigation/AwsAthenaListItem/AwsAthenaListItem';
import AvatarListItem from '../../Scenes/SideNavigation/AvatarListItem/AvatarListItem';
import ExpiredAuth from '../ErrorSplashes/ExpiredAuth';
import store from '../../../setupStore';

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
    transitionDelay: '500ms'
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

const Navigation = () => {
  const classes = navStyle();
  const [open, setOpen] = useState(false);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    axios.interceptors.response.use(
      response => {
        setApiError(null);
        return response;
      },
      error => {
        setApiError(error.response.status);
        return Promise.reject(error);
      }
    );
  });

  const closeDrawer = () => {
    setOpen(!open);
  };

  return (
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
      {(apiError === 401 || apiError === 403) && (
        <main>
          <ExpiredAuth />
        </main>
      )}
    </div>
  );
};

export default Navigation;
