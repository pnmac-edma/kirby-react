import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { List, ListItem, Collapse, ListItemText } from '@material-ui/core';
import { AccountBalanceOutlined, ArrowDropDown } from '@material-ui/icons/';

const GovernanceListItem = ({ closeAllArrows, governanceListItemsName }) => {
  const [openIconOne, setOpenIconOne] = useState(false);

  useEffect(() => {
    if (closeAllArrows === false && openIconOne === true) {
      setOpenIconOne(false);
    }
  }, [closeAllArrows, openIconOne]);

  const governanceListItemText = governanceListItemsName.map(text => (
    <ListItem key={text} button className="Nav__nested-item">
      <ListItemText className="Nav__text" primary={text} />
    </ListItem>
  ));

  return (
    <>
      <ListItem
        button
        onClick={() => setOpenIconOne(!openIconOne)}
        className={clsx(
          openIconOne
            ? clsx('Nav__item', 'Nav__item--is-open')
            : clsx('Nav__item')
        )}
      >
        <ArrowDropDown className="Nav__arrow" />
        <AccountBalanceOutlined className="Nav__icon" />
        <ListItemText className="Nav__text" primary="Governance" />
      </ListItem>
      <Collapse in={openIconOne} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {governanceListItemText}
        </List>
      </Collapse>
    </>
  );
};

export default GovernanceListItem;
