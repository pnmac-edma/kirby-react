import React, { useEffect } from 'react';
import { Divider } from '@material-ui/core';
import { color, fontSize } from '@edma/design-tokens';
import { makeStyles } from '@material-ui/core/styles';
import TableWrapper from '../../../Presentational/Table/TableWrapper';

const useStyles = makeStyles(theme => ({
  flexStructure: {
    display: 'flex',
    justifyContent: 'left'
  },
  sidebar: {
    background: theme.palette.type === 'light' ? color.g100 : color.g800,
    fontSize: fontSize[1],
    marginTop: '-10rem',
    marginBottom: '-10rem',
    overflow: 'hidden',
    paddingTop: '10rem',
    maxWidth: 430,
    minWidth: 300,
    width: '100%'
  },
  sideTable: {
    width: '70%'
  },
  sideBarPostion: {
    margin: '0 1rem',
    color: theme.palette.type === 'light' ? color.black : color.white
  },
  dividerStyle: {
    width: '100%',
    marginBottom: 32,
    marginTop: 24
  },
  heading: {
    margin: '1rem 0 2rem',
    color: theme.palette.type === 'light' ? color.black : color.white
  }
}));

const ViewJobs = () => {
  const classes = useStyles();

  useEffect(() => {
    // TODO: add action with saga that calls a list of jobs
  }, []);

  const columns = [
    { name: 'Name', property: 'name' },
    { name: 'Status', property: 'status' }
  ];
  const mockData = [
    { Id: 'dsfjasfdas', name: 'i am name', status: 'approved' },
    { Id: 'ddsafaa', name: 'i am another name', status: 'declined' }
  ];

  return (
    <div className={classes.flexStructure}>
      <div className={classes.sidebar}>
        <div className={classes.sideBarPostion}>
          <h3 className={classes.heading}>My Jobs</h3>
          <Divider className={classes.dividerStyle} />
          <h3 className={classes.heading}>Other Jobs</h3>
        </div>
      </div>

      <div className={classes.sideTable}>
        <TableWrapper columns={columns} data={mockData} />
      </div>
    </div>
  );
};

export default ViewJobs;
