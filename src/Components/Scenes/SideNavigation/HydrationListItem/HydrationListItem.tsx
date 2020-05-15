import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  List,
  ListItem,
  Collapse,
  ListItemText,
  Tooltip
} from '@material-ui/core';
import { color } from '@edma/design-tokens/';
import { ArrowDropDown } from '@material-ui/icons/';
import { ReactComponent as DropIcon } from '@edma/design-tokens/img/dropIcon.svg';
import { Link, useLocation } from 'react-router-dom';

const hydrationListItem = makeStyles(theme => ({
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

const HydrationListItem = ({
  closeAllArrows,
  openDrawer,
  closeDrawer
}: HydrationListItemProps) => {
  const [openIconTwo, setOpenIconTwo] = useState(false);
  const activeLink = useLocation();

  const classes = hydrationListItem();

  const clickActions = () => {
    setOpenIconTwo(!openIconTwo);
    openDrawer();
  };

  const hydrationListItemsName = [
    { label: 'New Destination', link: '/hydration/new-destination' },
    { label: 'New Job', link: '/hydration/new-job' },
    { label: 'View Jobs', link: '/hydration/view-jobs' }
  ];

  const hydrationListItemText = hydrationListItemsName.map(
    ({ label, link }) => (
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
          {label === 'View Jobs' ? (
            <>
              {label}
              <span className={classes.notificationText}> (3 updates)</span>
            </>
          ) : (
            label
          )}
        </ListItemText>
      </ListItem>
    )
  );

  useEffect(() => {
    if (closeAllArrows === false && openIconTwo === true) {
      setOpenIconTwo(false);
    }
  }, [closeAllArrows, openIconTwo]);

  const listItem = (
    <ListItem
      button
      onClick={() => clickActions()}
      className={clsx(
        openIconTwo
          ? clsx('Nav__item', 'Nav__item--is-open')
          : activeLink.pathname.includes('hydration')
          ? clsx('Nav__item', 'Nav__item--is-active')
          : clsx('Nav__item')
      )}
    >
      <ArrowDropDown className="Nav__arrow" />
      <DropIcon className="Nav__icon" />
      <div className={classes.notificationDot}></div>
      <ListItemText className="Nav__text" primary="Hydration" />
    </ListItem>
  );

  return (
    <>
      {closeAllArrows ? (
        listItem
      ) : (
        <Tooltip placement="right" title="Hydration">
          {listItem}
        </Tooltip>
      )}
      <Collapse in={openIconTwo} timeout="auto" unmountOnExit>
        <List component="div" disablePadding onClick={closeDrawer}>
          {hydrationListItemText}
        </List>
      </Collapse>
    </>
  );
};

export default HydrationListItem;

interface HydrationListItemProps {
  closeAllArrows: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}
