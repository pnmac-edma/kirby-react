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
  requestInboxAlert,
  newAlerts
}) => {
  const classes = requestListItem();
  const [openIconThree, setOpenIconThree] = useState(false);
  const [newAlert, setAlert] = useState([]);

  useEffect(() => {
    if (closeAllArrows === false && openIconThree === true) {
      setOpenIconThree(false);
    }
  }, [closeAllArrows, openIconThree]);

  useEffect(() => {
    requestInboxAlert();
    setAlert(newAlerts);
  }, [requestInboxAlert, newAlerts]);

  const requestListItemText = requestListItemsName.map(text => (
    <ListItem key={text} button className="Nav__nested-item">
      <ListItemText className="Nav__text">
        {text === 'Inbox' ? (
          <>
            {text}
            {newAlert > 0 ? (
              <span className={classes.newInbox}> ({newAlert} new)</span>
            ) : null}
          </>
        ) : (
          text
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
        {newAlert > 0 ? <div className={classes.newRequestCircle}></div> : null}
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
