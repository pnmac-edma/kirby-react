import React, { useEffect } from 'react';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RequestAssetTableContainer from '../RequestAssetTable/RequestAssetTable-Container';
import RequestAssetJustificationContainer from '../RequestAssetJustification/RequestAssetJustification-Container';
import RequestingForContainer from '../RequestingFor/RequestingFor-Container';
import RequestedByContainer from '../RequestedBy/RequestedBy-Container';
import SnackBarContainer from '../SnackBar/SnackBar-Container';
import RemoveModalContainer from '../RemoveModal/RemoveModal-Container';
import MakeRequestsContainer from '../MakeRequests/MakeRequests-Container';

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
  dividerStyle: {
    width: 400,
    marginBottom: 32,
    marginTop: 24
  }
}));

const RequestAsset = ({ getEmployeesFetch, openModal }) => {
  const classes = useStyles();
  useEffect(() => {
    getEmployeesFetch();
  }, [getEmployeesFetch]);

  const [notification, setNotification] = React.useState(false);

  const handleOpenNotification = () => {
    setNotification(true);
  };

  const handleCloseNotification = () => {
    setNotification(false);
  };

  return (
    <>
      <div className={classes.sideTable}>
        <RequestAssetTableContainer />
        {openModal ? (
          <RemoveModalContainer
            handleOpenNotification={handleOpenNotification}
          />
        ) : null}
        <RequestAssetJustificationContainer />
        <MakeRequestsContainer
          handleOpenNotification={handleOpenNotification}
          handleCloseNotification={handleCloseNotification}
        />
        <SnackBarContainer
          handleCloseNotification={handleCloseNotification}
          notification={notification}
        />
      </div>
      <div className="sidebar">
        <div className={classes.sideBarPostion}>
          <p className={classes.title}>Request Assets</p>
          <RequestedByContainer />
          <Divider className={classes.dividerStyle} />
          <RequestingForContainer />
        </div>
      </div>
    </>
  );
};
export default RequestAsset;
