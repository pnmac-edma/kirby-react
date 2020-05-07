import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import {
  makeStyles,
  List,
  ListItem,
  Collapse,
  ListItemText
} from '@material-ui/core';
import { InboxOutlined, ArrowDropDown } from '@material-ui/icons/';
import color from '@edma/design-tokens/js/color';
import { Link, useLocation } from 'react-router-dom';

const requestListItem = makeStyles(theme => ({
  newInbox: {
    color: color.t300
  },
  newRequestCircle: {
    position: 'absolute',
    top: '8px',
    left: '32px',
    height: '8px',
    width: '8px',
    borderRadius: '50%',
    backgroundColor: color.t300
  }
}));

const RequestListItem = ({
  closeAllArrows,
  closeDrawer
}: RequestListItemProps) => {
  const classes = requestListItem();

  const [openIconThree, setOpenIconThree] = useState(false);

  const currentRole = useSelector(({ currentUser }: any) => currentUser.role);

  const activeLink = useLocation();

  const requestListItemsName = [
    { label: 'Inbox', link: '/requests' },
    { label: 'Sent', link: '/requests/sent' },
    { label: 'Archive', link: '/requests/archive' }
  ];

  const requestListItemText = requestListItemsName.map(({ label, link }) => (
    <ListItem
      onClick={closeDrawer}
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
            <span className={classes.newInbox}> (3 new)</span>
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

  return (
    <>
      <ListItem
        className={clsx(
          openIconThree
            ? clsx('Nav__item', 'Nav__item--is-open')
            : clsx('Nav__item')
        )}
        button
        onClick={() => setOpenIconThree(!openIconThree)}
      >
        <ArrowDropDown className="Nav__arrow" />
        <InboxOutlined className="Nav__icon" />
        <div className={classes.newRequestCircle}></div>
        <ListItemText className="Nav__text">Requests</ListItemText>
      </ListItem>
      <Collapse in={openIconThree} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {currentRole.governance || currentRole.approver
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
  closeDrawer: () => void;
}