import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useLocation, Link } from 'react-router-dom';
import { makeStyles, ListItem, ListItemText } from '@material-ui/core';
import { CloudQueue, ExitToApp } from '@material-ui/icons/';

const awsAthenaListItem = makeStyles(theme => ({
  exitToApp: {
    position: 'relative',
    top: 6,
    left: 4
  }
}));

const AwsAthenaListItem = () => {
  const classes = awsAthenaListItem();
  const curPath = useLocation().pathname;
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      // do something meaningful, Promises, if/else, whatever, and then
      console.log('windown', window.location);
      window.open(
        'https://pennymac.onelogin.com/trust/saml2/http-post/sso/877999'
      );
    }
  }, [clicked]);

  console.log('Current path', curPath);
  return (
    <ListItem
      button
      onClick={() => setClicked(true)}
      className="Nav__item"
      component={Link}
      to="/awsAthena"
    >
      <CloudQueue className="Nav__icon" />
      <ListItemText className="Nav__text">
        AWS Athena
        <ExitToApp className={clsx('Nav__icon', classes.exitToApp)} />
      </ListItemText>
    </ListItem>
  );
};

export default AwsAthenaListItem;
