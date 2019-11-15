import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { List, ListItem, Collapse, ListItemText } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons/';
import { ReactComponent as DropIcon } from '@edma/design-tokens/img/dropIcon.svg';

const HydrationListItem = ({ closeAllArrows, hydrationListItemsName }) => {
  const [openIconTwo, setOpenIconTwo] = useState(false);

  useEffect(() => {
    if (closeAllArrows === false && openIconTwo === true) {
      setOpenIconTwo(false);
    }
  }, [closeAllArrows, openIconTwo]);

  const hydrationListItemText = hydrationListItemsName.map(text => (
    <ListItem key={text} button className="Nav__nested-item">
      <ListItemText className="Nav__text" primary={text} />
    </ListItem>
  ));

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
