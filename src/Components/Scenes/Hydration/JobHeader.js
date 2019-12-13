import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { ReactComponent as KirbyMark } from '../../../assets/img/kirbyMark.svg';

const headerStyles = makeStyles(theme => ({
  header: {
    marginLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.5),
    position: 'absolute',
    zIndex: 1
  },
  breadcrumbs: {
    whiteSpace: 'nowrap',
    color: theme.palette.common.black
  },
  mark: {
    height: theme.spacing(7),
    flexShrink: 0,
    marginRight: theme.spacing(1.5),
    '& path': {
      fill: theme.palette.type === 'light' ? color.black : color.white
    }
  }
}));

const JobHeader = props => {
  const classes = headerStyles();
  const { jobName } = props;

  return (
    <Box className={classes.header}>
      <KirbyMark className={classes.mark} />
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<Typography variant="h5">/</Typography>}
        className={classes.breadcrumbs}
      >
        <Link href="/hydration/view-jobs" variant="h5">
          Jobs
        </Link>
        <Typography variant="h5">{jobName}</Typography>
      </Breadcrumbs>
      <KeyboardArrowDownIcon />
    </Box>
  );
};

export default JobHeader;