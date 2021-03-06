import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import {
  makeStyles,
  List,
  ListItem,
  Collapse,
  ListItemText,
  Tooltip
} from '@material-ui/core';
import { InboxOutlined, ArrowDropDown } from '@material-ui/icons/';
import color from '@edma/design-tokens/js/color';
import { Link, useLocation } from 'react-router-dom';

const requestListItem = makeStyles(theme => ({
  notificationText: {
    color: color.c300
  },
  notificationDot: {
    position: 'absolute',
    top: '8px',
    left: '32px',
    height: '8px',
    width: '8px',
    borderRadius: '50%',
    backgroundColor: color.c300
  }
}));

const RequestListItem = ({
  closeAllArrows,
  openDrawer,
  closeDrawer
}: RequestListItemProps) => {
  const classes = requestListItem();

  const [openIconThree, setOpenIconThree] = useState(false);

  const clickActions = () => {
    setOpenIconThree(!openIconThree);
    openDrawer();
  };

  const currentRole = useSelector(({ currentUser }: any) => currentUser.role);

  const activeLink = useLocation();

  const requestListItemsName = [
    { label: 'Inbox', link: '/requests' },
    { label: 'Sent', link: '/requests/sent' },
    { label: 'Archive', link: '/requests/archive' }
  ];

  const requestListItemText = requestListItemsName.map(({ label, link }) => (
    <ListItem
      onClick={openDrawer}
      component={Link}
      to={link}
      key={label}
      button
      className={
        link === activeLink.pathname
          ? 'Nav__nested-item Nav__item--is-active'
          : 'Nav__nested-item'
      }
    >
      <ListItemText className="Nav__text">
        {label === 'Inbox' ? (
          <>
            {label}
            <span className={classes.notificationText}> (5 new)</span>
          </>
        ) : label === 'Sent' ? (
          <>
            {label}
            <span className={classes.notificationText}> (2 updates)</span>
          </>
        ) : (
          label
        )}
      </ListItemText>
    </ListItem>
  ));

  useEffect(() => {
    if (closeAllArrows === false && openIconThree === true) {
      setOpenIconThree(false);
    }
  }, [closeAllArrows, openIconThree]);

  const listItem = (
    <ListItem
      className={clsx(
        openIconThree
          ? clsx('Nav__item', 'Nav__item--is-open')
          : activeLink.pathname.includes('requests')
          ? clsx('Nav__item', 'Nav__item--is-active')
          : clsx('Nav__item')
      )}
      button
      onClick={() => clickActions()}
    >
      <ArrowDropDown className="Nav__arrow" />
      <InboxOutlined className="Nav__icon" />
      <div className={classes.notificationDot}></div>
      <ListItemText className="Nav__text">Requests</ListItemText>
    </ListItem>
  );

  return (
    <>
      {closeAllArrows ? (
        listItem
      ) : (
        <Tooltip placement="right" title="Requests">
          {listItem}
        </Tooltip>
      )}
      <Collapse in={openIconThree} timeout="auto" unmountOnExit>
        <List component="div" disablePadding onClick={closeDrawer}>
          {currentRole.isGovernor || currentRole.isApprover
            ? requestListItemText
            : [requestListItemText[1]]}
        </List>
      </Collapse>
    </>
  );
};

export default RequestListItem;

interface RequestListItemProps {
  closeAllArrows: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}
