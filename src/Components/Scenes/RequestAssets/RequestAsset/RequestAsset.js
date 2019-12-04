import React, { useEffect } from 'react';
import RequestAssetTableContainer from '../RequestAssetTable/RequestAssetTable-Container';
import RequestAssetJustificationContainer from '../RequestAssetJustification/RequestAssetJustification-Container';
import RequestingForContainer from '../RequestingFor/RequestingFor-Container';
import RequestedByContainer from '../RequestedBy/RequestedBy-Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, List, ListItem } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  sideTable: {
    width: '62%',
    marginLeft: '64vh'
  },
  sideBarPostion: {
    marginRight: '50vh',
    marginTop: '12vh',
    marginLeft: '1vh',
    color: 'black'
  },
  title: {
    width: 'max-content'
  },
  div: {
    left: -0.57,
    right: '-13.43%',
    top: '98.41%',
    bottom: 0
  }
}));

const RequestAsset = ({ getEmployeesFetch }) => {
  const classes = useStyles();
  useEffect(() => {
    getEmployeesFetch();
  }, [getEmployeesFetch]);

  return (
    <>
      <div className={classes.sideTable}>
        <RequestAssetTableContainer />
        <RequestAssetJustificationContainer />
      </div>
      <div className="sidebar">
        <div className={classes.sideBarPostion}>
          <p className={classes.title}>Request Assets</p>
          <RequestedByContainer />
          <List component="nav">
            <ListItem>
              <Divider absolute={true} className={classes.div} />
            </ListItem>
          </List>
          <RequestingForContainer />
        </div>
      </div>
    </>
  );
};
export default RequestAsset;
