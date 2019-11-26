import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { List, ListItem, Collapse, ListItemText } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons/';
import { ReactComponent as DropIcon } from '@edma/design-tokens/img/dropIcon.svg';
import { Link, useLocation } from 'react-router-dom';

const HydrationListItem = ({ closeAllArrows, hydrationListItemsName }) => {
  const [openIconTwo, setOpenIconTwo] = useState(false);
  const activeLink = useLocation();

  useEffect(() => {
    if (closeAllArrows === false && openIconTwo === true) {
      setOpenIconTwo(false);
    }
  }, [closeAllArrows, openIconTwo]);

  const hydrationListItemText = hydrationListItemsName.map(
    ({ label, link }) => (
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
        <ListItemText className="Nav__text" primary={label} />
      </ListItem>
    )
  );

  return (
    <>
      <ListItem
        button
        onClick={() => setOpenIconTwo(!openIconTwo)}
        className={clsx(
          openIconTwo
            ? clsx('Nav__item', 'Nav__item--is-open')
            : clsx('Nav__item')
        )}
      >
        <ArrowDropDown className="Nav__arrow" />
        <DropIcon className="Nav__icon" />
        <ListItemText className="Nav__text" primary="Hydration" />
      </ListItem>
      <Collapse in={openIconTwo} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {hydrationListItemText}
        </List>
      </Collapse>
    </>
  );
};

export default HydrationListItem;
