import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { List, ListItem, Collapse, ListItemText } from '@material-ui/core';
import { AccountBalanceOutlined, ArrowDropDown } from '@material-ui/icons/';
import { Link, useLocation } from 'react-router-dom';

const GovernanceListItem = ({
  closeAllArrows,
  closeDrawer
}: GovernanceListItemProps) => {
  const [openIconOne, setOpenIconOne] = useState(false);

  const activeLink = useLocation();

  const governanceListItemsName = [
    { label: 'Business Owners', link: '/governance/business-owners' },
    { label: 'Governors', link: '/governance/governors' },
    { label: 'Sensitivity Levels', link: '/governance/sensitivity-levels' }
  ];

  const governanceListItemText = governanceListItemsName.map(
    ({ label, link }) => (
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
        <ListItemText className="Nav__text" primary={label} />
      </ListItem>
    )
  );

  useEffect(() => {
    if (closeAllArrows === false && openIconOne === true) {
      setOpenIconOne(false);
    }
  }, [closeAllArrows, openIconOne]);

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

interface GovernanceListItemProps {
  closeAllArrows: boolean;
  closeDrawer: () => void;
}
