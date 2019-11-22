import React from 'react';
import RequestAssetTableContainer from '../RequestAssetTable/RequestAssetTable-Container';
import RequestAssetJustificationContainer from '../RequestAssetJustification/RequestAssetJustification-Container';
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
    flex: '0 0 auto',
    width: '100%'
  }
}));

const RequestAsset = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.sideTable}>
        <RequestAssetTableContainer />
        <RequestAssetJustificationContainer />
      </div>
      <div className="sidebar">
        <div className={classes.sideBarPostion}>
          <h1>Request Assets</h1>
        </div>
      </div>
    </>
  );
};
export default RequestAsset;
