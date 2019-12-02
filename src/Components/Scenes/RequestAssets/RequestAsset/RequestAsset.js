import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RequestAssetTableContainer from '../RequestAssetTable/RequestAssetTable-Container';
import RequestAssetJustificationContainer from '../RequestAssetJustification/RequestAssetJustification-Container';
import RequestingForContainer from '../RequestingFor/RequestingFor-Container';
import SnackBarContainer from '../SnackBar/SnackBar-Container';
import RemoveModalContainer from '../RemoveModal/RemoveModal-Container';

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

const RequestAsset = ({ getEmployeesFetch, notification, openModal }) => {
  const classes = useStyles();
  useEffect(() => {
    getEmployeesFetch();
  }, [getEmployeesFetch]);

  return (
    <>
      <div className={classes.sideTable}>
        <RequestAssetTableContainer />
        {openModal ? <RemoveModalContainer /> : null}
        <RequestAssetJustificationContainer />
        {notification ? (
          <SnackBarContainer notification={notification} />
        ) : null}
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
