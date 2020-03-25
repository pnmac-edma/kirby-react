import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { color } from '@edma/design-tokens';
import {
  Box,
  Breadcrumbs,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles(theme => ({
  header: {
    // marginLeft: '32px',
    // marginTop: '-2px',
    // display: 'flex',
    // alignItems: 'center',
    // padding: '16px 0',
    position: 'absolute',
    zIndex: 99999
  },
  breadcrumbs: {
    whiteSpace: 'nowrap',
    color: theme.palette.type === 'light' ? color.black : color.white,
    marginLeft: 70,
    marginTop: 10
  },
  jobName: {
    margin: 0,
    padding: 0,
    verticalAlign: 'top'
    // display: 'block',
    // '& .MuiInput-root:before, & .MuiInput-root:after': {
    //   display: 'none'
    // },

    // '& .MuiInput-input': {
    //   padding: 0
    // }
  },
  jobNameBtn: {
    margin: 0,
    marginLeft: '10px',
    padding: 0,
    verticalAlign: 'top',
    transition: 'all .2s ease-in-out',
    // verticalAlign: 'top',
    // position: 'relative',
    zIndex: 99999,
    top: 0,
    // height: '20px',
    width: '50px',

    '&:hover': {
      background: theme.palette.type === 'light' ? color.y100 : color.y300
    }

    // '& ~ svg ': {
    //   position: 'absolute',
    //   height: '0.8em',
    //   top: 19
    // }
  },
  untitledJobName: {
    background: theme.palette.type === 'light' ? color.y100 : color.y300,
    color: color.black
  },
  jobsLink: {
    // color: theme.palette.type === 'light' ? color.b600 : color.b200
  }
}));

const JobInfo = () => {
  const classes = useStyles();
  const [isJobNameActive, setIsJobNameActive] = useState(false);

  return (
    <Box className={classes.header}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<Typography variant="body1">/</Typography>}
        className={classes.breadcrumbs}
      >
        <Link
          href="/hydration/view-jobs"
          variant="body1"
          className={classes.jobsLink}
        >
          Jobs
        </Link>
        {isJobNameActive ? (
          <TextField
            autoFocus
            id="jobName"
            placeholder="My New Job"
            className={classes.jobName}
            onBlur={() => setIsJobNameActive(!isJobNameActive)}
          />
        ) : (
          <span>
            <span
              className={`${classes.jobNameBtn} ${classes.untitledJobName}`}
              onClick={() => setIsJobNameActive(!isJobNameActive)}
            >
              Button
            </span>
            <KeyboardArrowDownIcon />
          </span>
        )}
      </Breadcrumbs>
    </Box>
  );
};

export default JobInfo;
