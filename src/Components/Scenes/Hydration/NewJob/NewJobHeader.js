import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import { ReactComponent as KirbyMark } from '../../../../assets/img/kirbyMark.svg';

const headerStyles = makeStyles(theme => ({
  header: {
    marginLeft: 6,
    display: 'flex',
    alignItems: 'center',
    padding: 12
  },
  breadcrumbs: {
    whiteSpace: 'nowrap',
    color: theme.palette.common.black
  },
  mark: {
    height: '56px',
    flexShrink: 0,
    marginRight: 14,
    '& path': {
      fill: theme.palette.type === 'light' ? color.black : color.white
    }
  }
}));

const NewJobHeader = props => {
  const classes = headerStyles();
  const { jobName } = props;

  const slash = <Typography variant="h5">/</Typography>;

  return (
    <Box className={classes.header}>
      <KirbyMark className={classes.mark} />
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={slash}
        className={classes.breadcrumbs}
      >
        <Link href="/hydration/view-jobs" variant="h5">
          Jobs
        </Link>
        <Typography variant="h5">{jobName}</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default NewJobHeader;
