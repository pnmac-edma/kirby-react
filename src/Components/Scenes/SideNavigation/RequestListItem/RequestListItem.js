import React, { useState, useEffect } from 'react';
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
  requestListItemsName,
  inboxAlerts
}) => {
  const classes = requestListItem();
  const [openIconThree, setOpenIconThree] = useState(false);
  const activeLink = useLocation();
  const [alerts, setAlerts] = useState();

  alerts > 0
    ? (document.title = `(${alerts} new)`)
    : (document.title = `Kirby`);

  const newAlertsInbox = inboxAlerts.filter(
    alert => alert.requeststatus === 'Pending'
  ).length;

  useEffect(() => {
    if (closeAllArrows === false && openIconThree === true) {
      setOpenIconThree(false);
    }
  }, [closeAllArrows, openIconThree]);

  useEffect(() => {
    setAlerts(newAlertsInbox);
  }, [newAlertsInbox]);

  const requestListItemText = requestListItemsName.map(({ label, link }) => (
    <ListItem
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
            {alerts > 0 ? (
              <span className={classes.newInbox}> ({alerts} new)</span>
            ) : null}
          </>
        ) : (
          label
        )}
      </ListItemText>
    </ListItem>
  ));

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
        {alerts > 0 ? <div className={classes.newRequestCircle}></div> : null}
        <ListItemText className="Nav__text">Requests</ListItemText>
      </ListItem>
      <Collapse in={openIconThree} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {requestListItemText}
        </List>
      </Collapse>
    </>
  );
};

export default RequestListItem;
