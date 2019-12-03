import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Breadcrumbs, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import { ReactComponent as KirbyMark } from '../../../assets/img/kirbyMark.svg';

const chromeStyles = makeStyles(theme => ({
  header: {
    marginLeft: 6,
    display: 'flex',
    alignItems: 'center',
    padding: 12
  },
  jobName: {
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

const HydrationChrome = props => {
  const classes = chromeStyles();
  const jobName = 'My New Job';

  const slash = (
    <Typography variant="h5" style={{ color: 'black' }}>
      /
    </Typography>
  );

  return (
    <Box
      style={{
        position: 'fixed',
        zIndex: 1101,
        height: '100%',
        width: '100%',
        display: 'flex'
      }}
    >
      <Box
        style={{
          background:
            'repeating-linear-gradient(45deg, #EDF5FF, #EDF5FF 15px, #FFFFFF 5px, #FFFFFF 20px)',
          height: 'inherit',
          flexGrow: 1
        }}
      >
        <Box className={classes.header}>
          <KirbyMark className={classes.mark} />
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={slash}
            style={{ whiteSpace: 'nowrap' }}
          >
            <Link href="/hydration/view-jobs" onClick={() => {}} variant="h5">
              Jobs
            </Link>
            <Typography className={classes.jobName} variant="h5">
              {jobName}
            </Typography>
          </Breadcrumbs>
        </Box>
      </Box>
      <Box
        style={{
          minWidth: '350px',
          backgroundColor: 'white'
        }}
      >
        Toolbar Placeholder
      </Box>
    </Box>
  );
};

export default HydrationChrome;
