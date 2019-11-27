import React, { useEffect } from 'react';
import RequestAssetTableContainer from '../RequestAssetTable/RequestAssetTable-Container';
import RequestAssetJustificationContainer from '../RequestAssetJustification/RequestAssetJustification-Container';
import RequestingForContainer from '../RequestingFor/RequestingFor-Container';
import { makeStyles } from '@material-ui/core/styles';

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
          <RequestingForContainer />
        </div>
      </div>
    </>
  );
};
export default RequestAsset;
